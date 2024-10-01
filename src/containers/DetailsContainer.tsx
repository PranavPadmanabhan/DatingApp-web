/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

import CheckBox from '@/components/buttons/CheckBox';
import ItemSelectButton from '@/components/buttons/ItemSelectButton';
import Select from '@/components/buttons/Select';
import GradientText from '@/components/GradientText';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

type Details = {
  name: string;
  dob: string;
  gender: 'male' | 'female' | null;
  preferredGender: 'male' | 'female' | 'everyone' | null;
  orientations: string[];
  showGender: boolean;
  showOrientations: boolean;
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

const DetailsScreen = ({ setPage }: Props) => {
  const [show, setShow] = useState<boolean>(true);
  const orientations = [
    'Straight',
    'Lesbian',
    'Gay',
    'Bisexual',
    'Demisexual',
    'Asexual',
    'Pansexual',
    'Queer',
  ];
  const [selectedOrientations, setSelectedOrientations] = useState<string[]>(
    []
  );
  const [details, setDetails] = useState<Details>({} as Details);

  const onGenderSelect = (item: any, attr: keyof Details) => {
    if (details[attr] === item) {
      setDetails({ ...details, [attr]: null });
    } else {
      setDetails({ ...details, [attr]: item });
    }
  };
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
            Enter
            <br /> Your Details
          </GradientText>
          <label className='mb-2 text-sm text-goldAccent'>Name</label>
          <input
            type='text'
            className=' h-[80%] max-h-[40px] w-[80%] rounded-[8px] border-none bg-gold-100 pl-[15px] text-black placeholder:text-[1.2em] placeholder:text-gray-400 focus:border-none focus:outline-none'
            placeholder='Name'
          />
          <label className='my-2 text-sm text-goldAccent'>Date Of Birth</label>
          <div className='flex h-[80%] max-h-[40px] w-[80%] items-center justify-start gap-x-1'>
            <input
              type='number'
              className=' h-full max-h-[40px] w-[25%] max-w-[60px] rounded-[8px] border-none bg-gold-100 pl-[15px] text-black [appearance:textfield] placeholder:text-[1.2em] placeholder:text-gray-400 focus:border-none focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              placeholder='DD'
              maxLength={2}
            />
            <input
              type='number'
              className=' h-full max-h-[40px] w-[25%] max-w-[60px] rounded-[8px] border-none bg-gold-100 pl-[15px] [appearance:textfield] placeholder:text-[1.2em] placeholder:text-gray-400 focus:border-none focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              placeholder='MM'
              maxLength={2}
            />
            <input
              type='number'
              className=' h-full max-h-[40px] w-[40%] max-w-[100px] rounded-[8px] border-none bg-gold-100 pl-[15px] [appearance:textfield] placeholder:text-[1.2em] placeholder:text-gray-400 focus:border-none focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              placeholder='YYYY'
              maxLength={4}
            />
          </div>
          <label className='my-2 text-sm text-goldAccent'>Your Gender</label>
          <div className='flex h-[80%] max-h-[40px] w-[100%] items-center justify-start gap-x-1'>
            <ItemSelectButton
              onClick={() => onGenderSelect('male', 'gender')}
              isDisabled={false}
              isActive={details.gender === 'male'}
            >
              Male
            </ItemSelectButton>
            <ItemSelectButton
              onClick={() => onGenderSelect('female', 'gender')}
              isDisabled={false}
              isActive={details.gender === 'female'}
            >
              Female
            </ItemSelectButton>
            <CheckBox
              onClick={() =>
                setDetails({ ...details, showGender: !details.showGender })
              }
              className='ml-2'
              isActive={details.showGender}
              isDisabled={false}
            />
            <span
              onClick={() =>
                setDetails({ ...details, showGender: !details.showGender })
              }
              className='ml-1 cursor-pointer text-[0.8rem] text-goldAccent'
            >
              show this on my profile
            </span>
          </div>
          <label className='my-2 text-sm text-goldAccent'>
            Whom You Want To See
          </label>
          <div className='flex h-[80%] max-h-[40px] w-[100%] items-center justify-start gap-x-1'>
            <ItemSelectButton
              onClick={() => onGenderSelect('male', 'preferredGender')}
              isDisabled={false}
              isActive={details.preferredGender === 'male'}
            >
              Male
            </ItemSelectButton>
            <ItemSelectButton
              onClick={() => onGenderSelect('female', 'preferredGender')}
              isDisabled={false}
              isActive={details.preferredGender === 'female'}
            >
              Female
            </ItemSelectButton>
            <ItemSelectButton
              onClick={() => onGenderSelect('everyone', 'preferredGender')}
              isDisabled={false}
              isActive={details.preferredGender === 'everyone'}
            >
              Everyone
            </ItemSelectButton>
          </div>
          <label className='my-2 text-sm text-goldAccent'>
            Sexual Orientation {selectedOrientations.length}/3
          </label>
          <div className='flex h-[80%] max-h-[40px] w-[100%] items-center justify-start gap-x-1'>
            <Select
              data={orientations}
              multiple
              selected={selectedOrientations}
              setSelected={setSelectedOrientations}
            />
            <CheckBox
              className='ml-2'
              onClick={() =>
                setDetails({
                  ...details,
                  showOrientations: !details.showOrientations,
                })
              }
              isActive={details.showOrientations}
              isDisabled={false}
            />
            <span
              onClick={() =>
                setDetails({
                  ...details,
                  showOrientations: !details.showOrientations,
                })
              }
              className='ml-1 cursor-pointer text-[0.8rem] text-goldAccent'
            >
              show this on my profile
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailsScreen;
