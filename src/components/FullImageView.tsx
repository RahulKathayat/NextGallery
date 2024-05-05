import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/db/queries";
export default async function FullImageView({photoId}: {photoId: number}) {
    const image = await getImage(photoId);
    const uploaderId = await clerkClient.users.getUser(image.userId);
  return (
    <div className="w-full h-full flex min-w-0 overflow-y-hidden">
        <div className="flex flex-shrink item-center justify-center">
            <img src={image.url} alt={image.name} className="object-contain scale-90"/>
        </div>
        <div className="flex flex-col w-48 flex-shrink-0 border-l gap-2">
            <div className="text-lg border-b text-center p-2">
                {image.name}
            </div>
            <div className="text-lg border-b text-center p-2">
                Uploaded By : <br/>{uploaderId.fullName}
            </div>
            <div className="text-lg border-b text-center p-2">
                Created On : <br/>{new Date(image.createdAt).toLocaleDateString()}
            </div>
        </div>
    </div>
  );
}