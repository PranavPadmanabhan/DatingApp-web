import React from 'react';
function Firstdiv() {
  return (
    <div className='flex h-[100%] w-[100%] flex-col items-center justify-between bg-bgcolor'>
      <div className='h-[79%] w-[100%] rounded-lg bg-divcolor'>
        <div className='flex h-[18%] w-[100%] items-center justify-center   '>
          <div className=' box-border flex h-[53%] w-[40%] items-center justify-center rounded-[9px] bg-gradient-to-r from-goldd via-buttonbg to-Honey p-[2px]'>
            <div className=' flex h-[100%] w-[100%] items-center justify-center rounded-[7px]  bg-buttoncolor text-xs text-white'>
              Matches
            </div>
          </div>
          <button className='mx-2 flex h-[53%] w-[40%] items-center justify-center rounded-[9px]  bg-buttoncolor text-xs text-white'>
            Messages
          </button>
        </div>
        <div className='container  grid h-[88%] w-[100%] grid-cols-2 gap-0   '>
          <div className=' mx-5 my-3 box-border flex h-[125px] w-[117px] items-end justify-start rounded-md  bg-background bg-cover bg-no-repeat  px-1    '>
            {' '}
            <h1 className='mx-2 mb-1 text-xs font-normal text-white'> zayn</h1>
            <h1 className=' mb-1 text-xs font-normal text-white'>29</h1>
          </div>
        </div>
      </div>
      <div className='h-[17%] w-[100%] rounded-lg bg-divcolor'></div>
    </div>
  );
}

export default Firstdiv;
