/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react';

import GradientText from '@/components/GradientText';

import { ModalContext } from '@/contexts/ModalContext';
import { UserContext } from '@/contexts/UserContext';

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

type props = {
  previous: boolean;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const PhoneAuthContainer = ({ setPage, previous = false }: props) => {
  const [show, setShow] = useState<boolean>(true);
  const { setModalVisibility, modalVisibility } = useContext(ModalContext);
  const { setUser, user } = useContext(UserContext);
  const [error, setError] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    setUser({ ...user, phone: value });
    if (phoneno.test(value)) {
      setShow(!show);
      setError('');
    } else {
      setError('phone number is invalid');
    }
  };

  return (
    <AnimatePresence onExitComplete={() => setPage('OtpScreen')}>
      {show && (
        <motion.div
          variants={data}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, damping: 100, when: 'afterChildren' }}
          exit={previous ? 'hidden' : 'exit'}
          className='relative box-border flex h-[80%] w-[70%] flex-col items-center justify-start py-[5%]'
        >
          <img
            src='/images/1.png'
            alt='logo'
            className='h-[18%] max-h-[130px] w-[35%] max-w-[250px]'
          />
          <GradientText className='my-[5%] from-[#E3A400] via-[#FFDCA9] to-[#E3A401] text-center text-[2.4rem]'>
            Enter
            <br /> Your Number
          </GradientText>
          <div className='my-[2%] flex h-[10%] w-full items-center justify-start'>
            <div className='flex h-[80%] max-h-[45px] w-[20%] items-center justify-center rounded-[8px] bg-gold-100 text-[1.2vw]'>
              IN +91
            </div>
            <input
              type='text'
              className='ml-2 h-[80%] max-h-[45px] w-[80%] rounded-[8px] border-none bg-gold-100 pl-[15px] placeholder:text-[1.2vw] placeholder:text-gray-400 focus:border-none focus:outline-none'
              placeholder='XXX XXX XXXX'
              onChange={handleInput}
              value={user.phone}
            />
          </div>
          <span className='-mt-[3%] self-center text-center text-[0.7rem] text-red-500'>
            {error}
          </span>
          <h1 className='mt-[5%]  text-center font-comfortaa text-[1.2vw] font-[400] leading-5 text-goldAccent'>
            We’ll send a verification code to this
            <br /> number
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhoneAuthContainer;
