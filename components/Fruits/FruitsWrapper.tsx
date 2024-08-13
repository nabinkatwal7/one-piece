import { isImageUrl } from '@/utils/GetImageUrl';
import Image from 'next/image';

const FruitsWrapper = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold lg:text-5xl">Devil Fruits / 悪魔の実</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 ">
        {data?.map((item: any) => (
          <div
            key={item?.id}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 shadow-lg"
          >
            <Image
              src={item?.filename && isImageUrl(item.filename) ? item.filename : '/images/logo.png'}
              alt="logo"
              width={100}
              height={100}
            />
            <h1>{item?.name}</h1>
            <p>{item?.roman_name}</p>
            <p>{item?.type}</p>
            <p className="text-sm">{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitsWrapper;
