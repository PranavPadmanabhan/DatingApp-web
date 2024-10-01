/* eslint-disable @typescript-eslint/no-explicit-any */
import clsxm from 'clsx';
import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import CheckBox from './CheckBox';

type SelectProps = {
  isDisabled?: boolean;
  isDarkBg?: boolean;
  multiple: boolean;
  data: string[];
  setSelected: any;
  selected: any;
} & React.ComponentPropsWithRef<'button'>;

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    { className, data, selected, setSelected, multiple, isDisabled, ...rest },
    ref
  ) => {
    const [isOpened, setIsOpened] = React.useState(false);

    const itemOnclick = (item: string) => {
      if (multiple) {
        if (selected.includes(item)) {
          setSelected(selected.filter((el: string) => el !== item));
        } else {
          if (selected.length < 3) {
            setSelected([...selected, item]);
            if (selected.length === 2) {
              setIsOpened(false);
            }
          }
        }
      } else if (!multiple) {
        if (selected === item) {
          setSelected(null);
        } else {
          setSelected(item);
        }
      }
    };

    return (
      <button
        ref={ref}
        type='button'
        disabled={isDisabled}
        className={clsxm(
          'relative flex flex-col items-center justify-start font-medium',
          'p-[3px] focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          ' min-h-[40px] w-[50%] max-w-[50%]',
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
            isOpened ? 'h-[20vh]' : 'h-[40px]',
            'absolute top-0 w-full rounded-[7px] bg-white font-comfortaa ',
            'flex flex-col items-center justify-start'
          )}
        >
          <div
            onClick={() => setIsOpened(!isOpened)}
            className={clsxm(
              'flex min-h-[40px] w-full cursor-pointer items-center justify-between px-2 ',
              isOpened ? 'border-b-2' : 'border-b-none'
            )}
          >
            <span className='ml-2 cursor-pointer text-[1em] text-black'>
              select
            </span>
            {isOpened ? (
              <FaChevronUp size={20} color='black' />
            ) : (
              <FaChevronDown size={20} color='black' />
            )}
          </div>
          {isOpened && (
            <div
              className={clsxm(
                'h-full w-full overflow-y-scroll rounded-[7px] border-2 bg-white scrollbar-hide',
                'flex flex-col items-center justify-start'
              )}
            >
              {data.map((item, i) => (
                <div
                  onClick={() => itemOnclick(item)}
                  key={i}
                  className={clsxm(
                    'min-h-[43px] w-full cursor-pointer rounded-[7px]',
                    'flex items-center justify-between px-2',
                    selected.includes(item) || selected === item
                      ? 'font-bold text-goldd'
                      : 'font-normal text-black'
                  )}
                >
                  <span className={clsxm('text-[1em]')}>{item}</span>
                  <CheckBox
                    isActive={selected.includes(item) || selected === item}
                    isDisabled={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </button>
    );
  }
);

export default Select;
