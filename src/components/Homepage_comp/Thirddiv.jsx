import React from 'react';

function Thirddiv() {
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
            For you
          </button>
        </div>
        <div className='flex h-[88%] w-[100%] flex-col items-start justify-start  '>
          <h1 className='my-1 mx-5 text-xs font-medium text-superlike'>
            Super likes
          </h1>
          <div className='container  grid h-[40%] w-[100%]  grid-cols-2 gap-0 '>
            <div className=' mx-5 box-border flex h-[130px] w-[117px] items-end justify-start rounded-md  bg-background bg-cover bg-no-repeat px-1    '></div>
            <div className=' mx-5 box-border flex h-[130px] w-[117px] items-end justify-start rounded-md  bg-background bg-cover bg-no-repeat  px-1    '></div>
          </div>
          <h1 className='my-1 mx-5 text-xs font-medium text-superlike'>
            Likes
          </h1>
          <div className='container  grid h-[40%] w-[100%]  grid-cols-2 gap-0'>
            <div className=' mx-5 box-border flex h-[130px] w-[117px] items-end justify-start rounded-md bg-background bg-cover bg-no-repeat  px-1    '></div>
          </div>
        </div>
      </div>

      <div className=' box-border flex h-[17%] w-[100%] flex-row items-center justify-evenly rounded-[9px] bg-gradient-to-r from-goldd via-buttonbg to-Honey p-[2px] '>
        <div className='box-border flex h-[100%] w-[100%] flex-row items-center justify-evenly rounded-[7px] bg-divcolor px-1 '>
          <div className='  -ml-14 h-[55px] w-[55px] rounded-full bg-background bg-cover'></div>
          <h1 className=' -ml-16 text-sm font-normal text-Honey'>Honey</h1>

          <div className=' -mr-16 flex h-[90%] w-[30%] flex-col items-center justify-end'>
            <div
              className='text-md radial-progress my-1  rotate-180 bg-divcolor   text-goldd'
              style={{
                '--value': '70',
                '--size': '3rem',
                '--thickness': '4px',
              }}
            >
              <h1 className='rotate-180 text-sm font-light text-white'>70%</h1>
            </div>
            <h1 className='text-xs font-light text-white'>completed</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirddiv;
