/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

export interface User {
  uid?: string;
  name?: string;
  age?: number;
  gender?: string;
  sexualOrientaition?: string;
  preferredGender?: string;
  height?: number;
  email?: string;
  userName?: string;
  appleId?: string;
  phone?: string;
  images?: string[];
  languages?: string[];
  location: Location;
  education?: string;
  job?: string;
  bio?: string;
  company?: string;
  interests?: string[];
  city?: string;
  liked?: string[];
  likesRecieved?: string[];
  preferredAge?: string;
  premiumPlan?: any;
}

export type ContainerProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type userContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};
