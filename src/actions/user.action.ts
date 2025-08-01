"use server";
import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server"
import { error } from "console";
import { revalidatePath } from "next/cache";



export const syncUser = async() =>{
    try {
        const {userId} = await auth();
        const user = await currentUser();

        if(!userId || !user) return;

        const existingUser = await prisma.user.findUnique({
          where: {
            clerkId: userId,
          },
        });

          if (existingUser) return existingUser;

          const dbUser = await prisma.user.create({
            data: {
                clerkId: userId,
                name: `${user.firstName || ""} ${user.lastName || ""}`,
                username: user.username?? user.emailAddresses[0].emailAddress.split("@")[0],
                email: user.emailAddresses[0].emailAddress,
                image:  user.imageUrl,
            }
          })
          
    return dbUser;
        
    } catch (error) {
           console.log("Error in syncUser", error);
    }
}

export const getUserByClerkId = async(clerkId: string) => {
    return prisma.user.findUnique({
        where: {
            clerkId,
        },
        include: {
            _count: {
                select: {
                    followers: true,
                    following: true,
                    posts: true,
                }
            }
        }
    })
}

export const getDBUserId = async() => {
    const {userId: clerkId} = await auth();
    if(!clerkId) return null;

    const user = await getUserByClerkId(clerkId);
    if(!user) throw new Error("User not found");

    return user.id;
}

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