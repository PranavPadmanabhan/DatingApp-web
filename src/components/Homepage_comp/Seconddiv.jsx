import React from 'react';

function Seconddiv() {
  return (
    <div className='flex h-[100%] w-[100%] items-end justify-start rounded-lg bg-background bg-cover bg-no-repeat'>
      <div className='mb-4 flex h-[13%] w-[100%] flex-col items-start justify-center  pl-5'>
        <div className='mt-2 flex flex-row items-center '>
          <h1 className='text-2xl text-white'>Honey</h1>
          <h1 className='mx-4 text-2xl text-white'>31</h1>
        </div>
        <h1 className='text-xs font-light  text-white'>
          Less than a mile away
        </h1>
      </div>
    </div>
  );
}

export default Seconddiv;
