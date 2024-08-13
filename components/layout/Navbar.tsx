import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 flex w-screen flex-row items-center justify-between bg-white p-4 shadow-xl">
      <Image src="/images/onepiece.jpg" alt="logo" width={150} height={50} />
      <Image src="/images/logo.png" alt="logo" width={50} height={50} />
    </div>
  );
};

export default Navbar;
