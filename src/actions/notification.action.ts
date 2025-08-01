"use server"

import prisma from "@/lib/prisma";
import { getDBUserId } from "./user.action"
import { notFound } from "next/navigation";

export async function getNotifications() {
    try {
        const userId = await getDBUserId();
        if(!userId) return [];
        
        const notifications = await prisma.notification.findMany({
            where: {
                userId
            },
            include: {
                creator: {
                    select: {
                        id: true,
                        username: true,
                        image: true,
                        name: true,
                    }
                },
                post: {
                    select: {
                        id: true,
                        content: true,
                        image: true,
                    }
                },
                comment: {
                    select: {
                        id: true,
                        content: true,
                        createdAt: true,
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        return notifications;
    } catch (error) {
        console.error("Error fetching notifications", error);
        throw new Error("Failed to fetch notifications");
    }
}

export async function markNotificationsAsRead(notificationsIds: string[]){
    try {
        await prisma.notification.updateMany({
            where: {
                id: {
                    in: notificationsIds
                }
            },
            data:{
                read: true,
            }
        })
        return {success: true}
    } catch (error) {
        console.error("Error marking notifications as read", error);
        return {success :false};
    }
}