import { getImage } from "~/server/db/queries";
export default async function FullImageView({photoId}: {photoId: number}) {
    const image = await getImage(photoId);
  return (
      <img src={image.url} alt={image.name} className="w-96"/>
  );
}