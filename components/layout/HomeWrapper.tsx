import Link from 'next/link';
import React from 'react';
import NavCard from './NavCard';

const homeData = [
  {
    id: 1,
    name: 'sagas',
    url: '/saga',
    image: '/images/logo.png',
  },
];

const HomeWrapper = async () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {homeData.map((item) => (
        <Link key={item.id} href={item.url}>
          <NavCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default HomeWrapper;
