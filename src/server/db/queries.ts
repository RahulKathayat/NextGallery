import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

// fetch data in descending order by id
export const getMyImages = async () => {
    const user = auth();
    if(!user.userId) throw new Error("Unauthorized");
    
    const images = await db.query.images.findMany({
        orderBy: (model,{desc}) => desc(model.id),
        where: (model,{eq}) => eq(model.userId, user.userId),
    });
    return images;
};

export const getImage = async (id: number) => {
    const user = auth();
    if(!user.userId) throw new Error("Unauthorized");
    if(!user) throw new Error("Unauthorized");
    
    const image = await db.query.images.findFirst({
        where: (model,{eq}) => eq(model.id, id),
    });
    if(!image) throw new Error("Image not found");
    if(image.userId !== user.userId) throw new Error("Unauthorized");
    
    return image;
}