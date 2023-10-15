import { useSession } from 'next-auth/react';
import { AuthTypes } from '../types/authTypes';

export const useIsConnected = (): boolean => {
  const { status } = useSession();

  return status === AuthTypes.AUTHENTICATED;
};
