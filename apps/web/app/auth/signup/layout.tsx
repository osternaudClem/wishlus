import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign up | Wishlus',
};

const SignupLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <div>{children}</div>;
};

export default SignupLayout;
