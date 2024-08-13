import { Modal } from '@mantine/core';

const ChapterModal = ({ opened, close, data }: { opened: boolean; close: () => void; data: any }) => {
  return (
    <Modal opened={opened} onClose={close} centered title={`One Piece Chapter ${data?.id}`} size="lg">
      <div className="flex flex-col gap-2 p-2">
        <p>Manga Title: {data?.title}</p>
        <p>Arc: {data?.tome?.title}</p>
        <p>Published: {data?.tome?.tome_japan_date_publish}</p>
        <p>{data?.description}</p>
        <p>{data?.content}</p>
      </div>
    </Modal>
  );
};

export default ChapterModal;
