'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsConnected } from '../../../hooks/useIsConnected';
import Signin from './Signin';

const SigninContainer = (): JSX.Element => {
  const router = useRouter();
  const isConnected = useIsConnected();

  useEffect(() => {
    if (isConnected) {
      router.push('/');
    }
  }, [router, isConnected]);

  return <Signin />;
};

export default SigninContainer;
