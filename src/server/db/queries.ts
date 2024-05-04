import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
const user = auth();
    
if(!user.userId) throw new Error("Unauthorized");

// fetch data in descending order by id
export const getMyImages = async () => {
    const images = await db.query.images.findMany({
        orderBy: (model,{desc}) => desc(model.id),
        where: (model,{eq}) => eq(model.userId, user.userId),
    });
    return images;
};