/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsApple, BsGoogle } from 'react-icons/bs';
import { HiOutlineDeviceMobile } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

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

const AuthContainer = ({ setPage }: Props) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <AnimatePresence onExitComplete={() => setPage('phoneAuthScreen')}>
      {show && (
        <motion.div
          variants={data}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, damping: 100 }}
          exit='exit'
          className='relative box-border flex h-[75%] w-[70%] flex-col items-center justify-end pb-[5%]'
        >
          <img
            src='/images/1.png'
            alt='logo'
            className={clsxm(
              'absolute top-0 bottom-[55%] m-auto h-[18%] max-h-[130px] w-[35%] max-w-[250px]'
            )}
          />
          <GradientButton
            onClick={() => setShow(!show)}
            className='mb-2 flex max-h-[45px] w-[70%] max-w-[310px] items-center justify-start'
          >
            <BsApple color='black' size={22} className='mx-[5%]' />
            <h1 className='font-comfortaa text-[0.93vw] font-[700] text-black'>
              SIGN IN USING APPLE ID
            </h1>
          </GradientButton>
          <GradientButton
            onClick={() => setShow(!show)}
            className='mb-2 flex max-h-[45px] w-[70%] max-w-[310px] items-center justify-start'
          >
            <BsGoogle color='black' size={20} className='mx-[5%]' />
            <h1 className='font-comfortaa text-[0.93vw] font-[700] text-black'>
              SIGN IN USING GOOGLE
            </h1>
          </GradientButton>
          <GradientButton
            onClick={() => setShow(!show)}
            className='mb-2 flex max-h-[45px] w-[70%] max-w-[310px] items-center justify-start'
          >
            <HiOutlineDeviceMobile
              color='black'
              size={25}
              className='mx-[3%]'
            />
            <h1 className='ml-1 font-comfortaa text-[0.93vw] font-[700] leading-4 text-black'>
              SIGN IN USING PHONE NO
            </h1>
          </GradientButton>
          <h1 className='mt-[5%] text-center font-comfortaa text-[0.93vw] font-[300] leading-5 text-goldAccent'>
            By entering, you agree to our
            <br />
            <span className='underline'>Terms and Condition</span> and{' '}
            <span className='underline'>Privacy Policy</span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthContainer;
