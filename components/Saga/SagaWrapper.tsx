import { replaceATo } from '@/utils/ReplaceA';
import React from 'react';

const SagaWrapper = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold lg:text-5xl">One Piece Sagas</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {data?.map((item: any) => (
          <div key={item?.id} className=" gap-2 rounded-lg border p-2 shadow-lg">
            <div className="flex flex-row items-center gap-2 text-xl font-bold">
              <p>{item?.saga_number}.</p>
              <p className="whitespace-nowrap">{item?.title}</p>
            </div>
            <p>Saga Chapter: {replaceATo(item?.saga_chapitre || '')}</p>
            <p>Saga Volume: {replaceATo(item?.saga_volume || '')}</p>
            <p>Saga Episode:{replaceATo(item?.saga_episode || '')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SagaWrapper;
