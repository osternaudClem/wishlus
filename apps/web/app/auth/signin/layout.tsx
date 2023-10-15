import type { Metadata } from 'next';
import AuthLayout from '../../../layouts/AuthLayout';

export const metadata: Metadata = {
  title: 'Sign in | Wishlus',
};

const SigninLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default SigninLayout;
