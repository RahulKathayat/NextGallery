import { getImage } from "~/server/db/queries";


export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if(isNaN(idAsNumber)) throw new Error("Invalid id");
    const image = await getImage(idAsNumber);
  return (<div>
    <img src={image.url} alt={image.name} className="w-96"/>
    <div>{image.name}</div>
  </div>);
}