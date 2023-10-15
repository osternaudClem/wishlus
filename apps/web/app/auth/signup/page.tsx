'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsConnected } from '../../../hooks/useIsConnected';
import Signup from './Signup';

const SignupContainer = (): JSX.Element => {
  const router = useRouter();
  const isConnected = useIsConnected();

  useEffect(() => {
    if (isConnected) {
      router.push('/');
    }
  }, [router, isConnected]);

  return <Signup />;
};

export default SignupContainer;
