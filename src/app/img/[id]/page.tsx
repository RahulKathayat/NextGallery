import FullImageView from "~/components/FullImageView";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
    const idAsNumber = Number(photoId);
  return (
      <FullImageView photoId={idAsNumber} />
  );
}