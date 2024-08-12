import Image from 'next/image';
import React from 'react';

const NavCard = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={data.image} alt="logo" width={100} height={100} />
      <p className="capitalize">{data.name}</p>
    </div>
  );
};

export default NavCard;
