/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

import GradientText from '@/components/GradientText';
import { FaPlus } from 'react-icons/fa';
import GradientButton from '@/components/buttons/GradientButton';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const data = {
  visible: {
    x: 0,
  },
  hidden: {
    x: '40vw',
  },
  exit: {
    x: '-40vw',
  },
};

const ImageUploadScreen = ({ setPage }: Props) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <AnimatePresence onExitComplete={() => setPage('phoneAuthScreen')}>
      {show && (
        <motion.div
          variants={data}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5, damping: 100 }}
          exit='exit'
          className='relative box-border flex h-[85%] w-[70%] flex-col items-start justify-start pb-[5%]'
        >
          <img
            src='/images/1.png'
            alt='logo'
            className={clsxm(
              ' h-[15%] max-h-[100px] w-[30%] max-w-[170px] self-center'
            )}
          />
          <GradientText className='my-[2%] self-center from-[#E3A400] via-[#FFDCA9] to-[#E3A401]  text-center text-[1.5vw]'>
            Add
            <br /> Your Photos
          </GradientText>
          <div className='flex h-full w-full max-w-[450px] items-center justify-evenly self-center'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-y-2 px-1'>
              <div className='relative flex h-[50%] w-full items-center justify-center rounded-[10px] bg-white'>
                <FaPlus size={65} className='text-gray-300' />
                <input
                  type='file'
                  className='absolute top-0 h-full w-full bg-transparent opacity-0'
                />
                <div className='absolute bottom-1 right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-200 text-[0.6em] text-black '>
                  1
                </div>
              </div>
              <div className='flex h-[20%] min-h-[108px] w-full items-center justify-between gap-x-2 bg-transparent'>
                <div className='relative flex h-full w-full items-center justify-center rounded-[10px] bg-white'>
                  <FaPlus size={45} className='text-gray-300' />
                  <input
                    type='file'
                    className='absolute top-0 h-full w-full bg-transparent opacity-0'
                  />
                  <div className='absolute bottom-1 right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-200 text-[0.6em] text-black '>
                    3
                  </div>
                </div>
                <div className='relative flex h-full w-full items-center justify-center rounded-[10px] bg-white'>
                  <FaPlus size={45} className='text-gray-300' />
                  <input
                    type='file'
                    className='absolute top-0 h-full w-full bg-transparent opacity-0'
                  />
                  <div className='absolute bottom-1 right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-200 text-[0.6em] text-black '>
                    4
                  </div>
                </div>
              </div>
            </div>
            <div className='flex h-full w-full flex-col items-center justify-center gap-y-2 px-1'>
              <div className='flex h-[20%] min-h-[108px] w-full items-center justify-between gap-x-2 bg-transparent'>
                <div className='relative flex h-full w-full items-center justify-center rounded-[10px] bg-white'>
                  <FaPlus size={45} className='text-gray-300' />
                  <input
                    type='file'
                    className='absolute top-0 h-full w-full bg-transparent opacity-0'
                  />
                  <div className='absolute bottom-1 right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-200 text-[0.6em] text-black '>
                    5
                  </div>
                </div>
                <div className='relative flex h-full w-full items-center justify-center rounded-[10px] bg-white'>
                  <FaPlus size={45} className='text-gray-300' />
                  <input
                    type='file'
                    className='absolute top-0 h-full w-full bg-transparent opacity-0'
                  />
                  <div className='absolute bottom-1 right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-200 text-[0.6em] text-black '>
                    6
                  </div>
                </div>
              </div>
              <div className='relative flex h-[50%] w-full items-center justify-center rounded-[10px] bg-white'>
                <FaPlus size={65} className='text-gray-300' />
                <input
                  type='file'
                  className='absolute top-0 h-full w-full bg-transparent opacity-0'
                />
                <div className='absolute bottom-1 right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-200 text-[0.6em] text-black '>
                  2
                </div>
              </div>
            </div>
          </div>
          <h1 className='-mt-[3%] mb-[5%]  text-center font-comfortaa text-[0.9em] font-[400] leading-5 text-goldAccent'>
            add atleast 2 photos with face
          </h1>
          <GradientButton
            onClick={() => setShow(!show)}
            className='flex w-[50%] max-w-[310px] items-center justify-center self-center text-[1.2em] text-black'
          >
            Save
          </GradientButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageUploadScreen;
