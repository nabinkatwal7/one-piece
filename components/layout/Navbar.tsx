import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 flex w-screen flex-row items-center justify-between bg-white p-4 shadow-xl">
      <p className="text-xl font-bold">ONE PIECE</p>
      <Image src="/images/logo.png" alt="logo" width={50} height={50} />
    </div>
  );
};

export default Navbar;
