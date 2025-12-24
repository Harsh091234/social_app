"use server";
import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server"
import { error } from "console";
import { revalidatePath } from "next/cache";




export const getOrCreateUser = async () => {
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
            posts: true,
          },
        },
      },
    });

    if (existingUser) return existingUser;

    const clerkUser = await currentUser();
    if (!clerkUser) return null;

    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
        username:
          clerkUser.username ??
          clerkUser.emailAddresses[0].emailAddress.split("@")[0],
        email: clerkUser.emailAddresses[0].emailAddress,
        image: clerkUser.imageUrl,
      },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
            posts: true,
          },
        },
      },
    });

    return dbUser;
  } catch (error) {
    console.error("getOrCreateUser error:", error);
    return null;
  }
};


export const getDBUserId = async () => {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await getOrCreateUser();
  if (!user) {
    return null;
  }

  return user.id;
};
export const getRandomUsers = async() => {
    try {
      const userId = await getDBUserId();
      if (!userId) return [];
      // get 3 random users exclude ourselves & users that we already follow
      const randomUsers = await prisma.user.findMany({
        where: {
            AND: [
                {NOT: {id: userId}},
                {NOT: {followers: {
                    some: {
                        followerId: userId
                    }
                }}}
            ]
        },
        select: {
            id: true,
            name: true,
            image: true,
            username: true,
            _count: {
                select: {
                    followers: true,
                }
            }
        },
        take: 3,
      })

      return randomUsers;
    } catch (error) {
         console.log("Error fetching random users", error);
         return [];
    }
}

export const toggleFollow = async(targetedUserId: string) => {
    try {
        const userId = await getDBUserId();
        if(!userId) return;
        if(userId === targetedUserId){
            throw new Error("You cannot follow yourself")
        }

        const existingFollow = await prisma.follows.findUnique({
            where: {
                followerId_followingId: {
                    followerId: userId,
                    followingId: targetedUserId
                }
            }
        })
        if(existingFollow){
            await prisma.follows.delete({
              where: {
                followerId_followingId: {
                  followerId: userId,
                  followingId: targetedUserId,
                },
              },
            });
        }
        else{
            await prisma.$transaction([
                prisma.follows.create({
                    data: {
                        followerId: userId,
                        followingId: targetedUserId    
                    }
                }),
                prisma.notification.create({
                    data: {
                        type: "FOLLOW",
                        userId: targetedUserId,
                        creatorId: userId
                    }
                })
            ])
        }
        revalidatePath("/");
        return {success: true}
    } catch (error) {
        console.log("Error in toggleFollow", error);
        return {success: false, error: "Error toggling follow"};
    }
}