/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import GradientText from '@/components/GradientText';

import { ContainerProps } from '@/constant/Types';

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

const OtpScreen = ({ setPage }: ContainerProps) => {
  const [show, setShow] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    if (editMode) {
      setPage('phoneAuthScreen');
    } else {
      setPage('OtpScreen');
    }
  }, [editMode]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        editMode ? setPage('phoneAuthScreen') : setPage('OtpScreen');
      }}
    >
      {show && (
        <motion.div
          variants={data}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, damping: 10 }}
          exit='exit'
          className='relative box-border flex h-[80%] w-[70%] flex-col items-center justify-start py-[5%]'
        >
          <img
            src='/images/1.png'
            alt='logo'
            className={clsxm('h-[18%] max-h-[130px] w-[35%] max-w-[250px]')}
          />
          <GradientText className='my-[5%] from-[#E3A400] via-[#FFDCA9] to-[#E3A401] text-center text-[2.4rem]'>
            Enter
            <br /> Your OTP
          </GradientText>
          <div className='my-[2%] flex h-[10%] w-full items-center justify-start'></div>
          <span className='-mt-[3%] self-center text-center text-[0.7rem] text-red-500'></span>
          <h1 className='mt-[5%]  text-center font-comfortaa text-[1rem] font-[400] leading-5 text-goldAccent'>
            wrong number?{' '}
            <span
              onClick={() => {
                setEditMode(!editMode);
                // setPage('phoneAuthScreen');
                setShow(!show);
              }}
              className='cursor-pointer underline'
            >
              Edit number
            </span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OtpScreen;
