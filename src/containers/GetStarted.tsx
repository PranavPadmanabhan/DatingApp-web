/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

import GradientButton from '@/components/buttons/GradientButton';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const data = {
  hidden: {
    x: '-40vw',
  },
};

const GetStarted = ({ setPage }: Props) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <AnimatePresence onExitComplete={() => setPage('authScreen')}>
      {show && (
        <motion.div
          variants={data}
          transition={{ duration: 0.5, damping: 100 }}
          exit='hidden'
          className='relative box-border flex h-[70%] w-[70%] flex-col items-center justify-end pb-[5%]'
        >
          <img
            src='/images/1.png'
            alt='logo'
            className={clsxm(
              'absolute top-0 bottom-[25%] m-auto h-[22%] max-h-[22%] w-[35%] max-w-[35%]'
            )}
          />
          <GradientButton
            onClick={() => setShow(!show)}
            className='flex w-[70%] max-w-[310px] items-center justify-center text-[1.2em] text-black'
          >
            Get Started
          </GradientButton>
          <h1 className='mt-[5%] text-center font-comfortaa text-[0.93em] font-[300] leading-5 text-goldAccent'>
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

export default GetStarted;
