/* eslint-disable unused-imports/no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/ModalContext';

const modal = {
  hidden: {
    y: '100vh',
  },
  visible: {
    y: 0,
  },
  exit: {
    y: '-100vh',
  },
};

type ModalProps = {
  title: string;
  content: string | null;
  leftButtonTitle: string;
  rightButtonTitle: string;
  leftButtonClick: () => void;
  rightButtonClick: () => void;
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      content,
      leftButtonClick,
      leftButtonTitle,
      rightButtonClick,
      rightButtonTitle,
      title,
      ...rest
    },
    ref
  ) => {
    const { setModalVisibility, modalVisibility } = useContext(ModalContext);

    return (
      <AnimatePresence>
        {modalVisibility && (
          <div className='absolute flex h-full w-full cursor-pointer items-center justify-center bg-black-100 backdrop-brightness-50'>
            <motion.div
              variants={modal}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.4 }}
              className='flex h-[20%] w-[40%] min-w-[200px] flex-col items-center justify-between overflow-hidden rounded-lg bg-white pt-[2%]'
            >
              <h1 className='max-w-[70%] text-center font-comfortaa text-[0.95rem] font-extrabold leading-4 text-black'>
                {title}
              </h1>
              <p className='my-[2%] max-w-[85%] text-center font-comfortaa text-[0.7rem] font-light leading-4 text-black'>
                {content}
              </p>
              <div className='flex h-[20%] min-h-[40px] w-full items-center justify-between border-t-[1px] border-t-transparent-thin-border bg-transparent'>
                <div
                  onClick={leftButtonClick}
                  className='flex h-full w-1/2 items-center justify-center border-r-[1px] border-r-transparent-thin-border bg-transparent'
                >
                  {leftButtonTitle}
                </div>
                <div
                  onClick={rightButtonClick}
                  className='flex h-full w-1/2 items-center justify-center bg-transparent'
                >
                  {rightButtonTitle}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

export default Modal;
