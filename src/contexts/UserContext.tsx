import React from 'react';

import { ContextProviderProps, User, userContext } from '@/constant/Types';

export const UserContext = React.createContext<userContext>({} as userContext);

const UserContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = React.useState<User>({} as User);

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
