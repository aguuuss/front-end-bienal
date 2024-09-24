import React from 'react';
import Header from '../components/Home/Header';
import SculptorShow from '../components/Home/SculptorShow';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-20 flex items-center justify-center">
        <SculptorShow />
      </div>
    </>
  );
}
