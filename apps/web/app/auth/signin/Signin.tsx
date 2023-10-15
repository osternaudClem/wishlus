import { signIn } from 'next-auth/react';
import React, { useCallback, useState } from 'react';
import { Button, ButtonGoogle } from '../../../components/Button';
import { TextField } from '../../../components/Input';
import useTextField from '../../../hooks/useTextField';

const Signin = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const {
    value: email,
    updateField: updateEmail,
    isError: isEmailError,
  } = useTextField('', ['email']);
  const {
    value: password,
    updateField: updatePassword,
    isError: isPasswordError,
  } = useTextField('', ['password']);

  const handleSigninWithGoogle = useCallback(async () => {
    await signIn('google', undefined, { prompt: 'login' });
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setError(null);

      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (!response?.ok) {
        setError('Email or password is incorrect');
      }
    },
    [email, password]
  );

  return (
    <div>
      <ButtonGoogle onClick={handleSigninWithGoogle} />

      <form onSubmit={handleSubmit}>
        {error ? <p>{error}</p> : null}
        <TextField
          errorMessage="invalid email address"
          id="email"
          isError={email ? isEmailError : false}
          label="Email"
          onChange={updateEmail}
        />
        <TextField
          errorMessage="password not strong enougth"
          id="password"
          isError={password ? isPasswordError : false}
          label="Password"
          onChange={updatePassword}
          showTogglePassword
          type="password"
        />

        <Button type="submit">Se connecter</Button>
      </form>
    </div>
  );
};

export default Signin;
