import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
} & React.ComponentPropsWithRef<'button'>;

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, disabled: buttonDisabled, isLoading, ...rest },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        style={{
          background:
            'linear-gradient(90deg, #E3A400 4.98%, #FFDCA9 50.51%, #E3A400 100%)',
        }}
        className={clsxm(
          'inline-flex items-center rounded px-4 py-2 font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'min-w-[150px]',
          'rounded-[50px]',
          'transition-colors duration-75',
          'cursor-pointer',
          //#region  //*=========== Variants ===========
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default GradientButton;
