import Link from 'next/link';
import React from 'react';
import NavCard from './NavCard';
import Landing from '../Home/Landing';

const homeData = [
  {
    id: 1,
    name: 'sagas',
    url: '/saga',
    image: '/images/logo.png',
  },
  {
    id: 2,
    name: 'devil fruits',
    url: '/fruits',
    image: '/images/fruits.png',
  },
  {
    id: 3,
    name: 'chapters',
    url: '/chapter',
    image: '/images/chapters.png',
  },
];

const HomeWrapper = async () => {
  return (
    <div className="flex flex-col gap-4">
      <Landing />
      <div>
        <h1 className="my-4 text-center text-3xl font-bold lg:text-5xl">One Piece Wiki</h1>
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
          {homeData.map((item) => (
            <Link key={item.id} href={item.url}>
              <NavCard data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWrapper;
