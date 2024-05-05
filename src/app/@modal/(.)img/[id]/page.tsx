import { Modal } from "./modal";
import FullImageView from "~/components/FullImageView";


export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
    const idAsNumber = Number(photoId);
  return (
    <Modal>
      <FullImageView photoId={idAsNumber} />
    </Modal>
  );
}