import clsxm from 'clsx';
import * as React from 'react';

type ItemSelectButtonProps = {
  isDisabled: boolean;
  isDarkBg?: boolean;
  isActive: boolean;
} & React.ComponentPropsWithRef<'button'>;

const ItemSelectButton = React.forwardRef<
  HTMLButtonElement,
  ItemSelectButtonProps
>(({ children, className, isDisabled, isActive, ...rest }, ref) => {
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
        'p-[3px] focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
        'shadow-sm',
        'h-full max-h-[40px] w-[40%] max-w-[100px]',
        'rounded-[10px]',
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
          'h-full w-full rounded-[7px] bg-white font-comfortaa',
          'flex items-center justify-center',
          isActive ? 'font-bold text-goldd' : 'font-normal text-black'
        )}
      >
        {children}
      </div>
    </button>
  );
});

export default ItemSelectButton;
