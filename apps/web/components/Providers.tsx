'use client';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';
import React from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return <SessionProvider>{children}</SessionProvider>;
};
