import React, { useState } from 'react';

type ModalContextProps = {
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisibility: boolean;
};

type modalProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = React.createContext<ModalContextProps>(
  {} as ModalContextProps
);

const ModalContextProvider = ({ children }: modalProviderProps) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const value = {
    setModalVisibility,
    modalVisibility,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
