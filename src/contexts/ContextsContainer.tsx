import React from 'react';

import { ContextProviderProps } from '@/constant/Types';
import ModalContextProvider from '@/contexts/ModalContext';
import UserContextProvider from '@/contexts/UserContext';

const ContextsContainer = ({ children }: ContextProviderProps) => {
  return (
    <UserContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </UserContextProvider>
  );
};

export default ContextsContainer;
