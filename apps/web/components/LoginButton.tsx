'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useCallback } from 'react';

interface LoginButtonProps {
  className?: string;
}

const LoginButton = ({ className = '' }: LoginButtonProps): JSX.Element => {
  const { data: session } = useSession();

  const handleLogin = useCallback(async () => {
    await signIn();
  }, []);

  const handleLogout = useCallback(async () => {
    await signOut();
  }, []);

  if (session?.user) {
    return (
      <div className={className}>
        <p>{session.user.name}</p>
        <button
          onClick={handleLogout}
          type="button"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <button
        onClick={handleLogin}
        type="button"
      >
        Log in
      </button>
    </div>
  );
};

export default LoginButton;
