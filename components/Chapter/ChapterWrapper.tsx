'use client';
import { useDisclosure } from '@mantine/hooks';
import ChapterModal from './ChapterModal';
import { useState } from 'react';

const ChapterWrapper = ({ data }: { data: any }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [id, setId] = useState(1);
  return (
    <div>
      <ChapterModal opened={opened} close={close} data={data[id - 1]} />
      <div className="flex flex-col gap-4">
        {data?.map((item: any) => (
          <button
            onClick={() => {
              setId(item?.id);
              open();
            }}
            key={item?.id}
            className="flex flex-col rounded-lg border px-4 py-2 shadow-lg"
          >
            <div className="flex flex-row items-center gap-1 font-bold">
              <p>{item?.id}.</p>
              <p>
                {item?.title} ({item?.tome?.title}){' '}
              </p>
            </div>
            <p className="text-left">{item?.description}</p>
            <p className="text-sm text-gray-600">{item?.tome?.tome_japan_date_publish}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChapterWrapper;
