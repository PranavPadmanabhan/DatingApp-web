import clsxm from 'clsx';
import * as React from 'react';
import { FaCheck } from 'react-icons/fa';

type CheckBoxProps = {
  isDisabled: boolean;
  isDarkBg?: boolean;
  isActive: boolean;
} & React.ComponentPropsWithRef<'button'>;

const CheckBox = React.forwardRef<HTMLButtonElement, CheckBoxProps>(
  ({ className, isDisabled, isActive, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={isDisabled}
        style={{
          background: isActive
            ? 'linear-gradient(90deg, #E3A400 4.98%, #FFDCA9 50.51%, #E3A400 100%)'
            : 'white',
        }}
        className={clsxm(
          'flex items-center justify-center font-medium',
          'p-[2px] focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'h-[70%] max-h-[20px] w-[30%] max-w-[20px]',
          'rounded-[5px]',
          'transition-colors duration-75',
          'cursor-pointer',
          //#region  //*=========== Variants ===========
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        <div
          className={clsxm(
            'h-full w-full rounded-[3px] bg-white font-comfortaa',
            'flex items-center justify-center',
            isActive ? 'font-bold text-goldd' : 'font-normal text-black'
          )}
        >
          {isActive ? <FaCheck size={16} className='text-goldd' /> : null}
        </div>
      </button>
    );
  }
);

export default CheckBox;
