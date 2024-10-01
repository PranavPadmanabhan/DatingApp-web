/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

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
  const length = 6;
  const [show, setShow] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleOtpChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const handleChange = (value: string, index: number) => {
    if (/[^0-9]/.test(value)) return; // Allow only numeric input

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    handleOtpChange(newOtp.join(''));

    // Move focus to the next input if the current input is filled
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (index === length - 1) {
      setEditMode(!editMode);
      setPage('DetailsScreen');
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData
      .getData('text')
      .split('')
      .slice(0, length);
    if (pastedData.some((char) => /[^0-9]/.test(char))) return; // Ignore non-numeric input
    setOtp(pastedData);
    handleOtpChange(pastedData.join(''));

    pastedData.forEach((char, index) => {
      inputRefs.current[index].value = char;
    });

    if (pastedData.length < length) {
      inputRefs.current[pastedData.length].focus();
    } else {
      inputRefs.current[length - 1].focus();
    }
  };

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
          transition={{ duration: 0.5, damping: 10 }}
          exit='exit'
          className='relative box-border flex h-[80%] w-[70%] flex-col items-center justify-start py-[5%]'
        >
          <img
            src='/images/1.png'
            alt='logo'
            className={clsxm('h-[18%] max-h-[130px] w-[35%] max-w-[250px]')}
          />
          <GradientText className='my-[5%] from-[#E3A400] via-[#FFDCA9] to-[#E3A401] text-center text-[2vw]'>
            Enter
            <br /> Your OTP
          </GradientText>
          <div className='my-[2%] flex h-[10%] w-full items-center justify-center'>
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el!)}
                  type='text'
                  inputMode='numeric'
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={handlePaste}
                  className='ml-2 h-[100%] max-h-[100%] min-h-[35px] w-[30%] max-w-[12%] rounded-[8px] border-none bg-gold-100 text-center text-[1.2em] text-black placeholder:text-[1.2em] placeholder:text-gray-400 focus:border-none focus:outline-none'
                  placeholder='X'
                />
              ))}
          </div>
          <span className='-mt-[3%] self-center text-center text-[0.7rem] text-red-500'></span>
          <h1 className='mt-[5%] text-center font-comfortaa text-[1rem] font-[400] leading-5 text-goldAccent'>
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
