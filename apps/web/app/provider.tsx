'use client';

import { SessionProvider } from 'next-auth/react';
import { createGlobalStyle } from 'styled-components';
import { colors } from '../constants/style/colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 100px transparent inset !important;
    transition-property: background-color, color;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
  }

  body {
    font-family: 'Fredoka', sans-serif;
    margin: 0;
    background: ${colors.background.dark};
    color: ${colors.primary[100]};
    letter-spacing: .4px;
  }

  h1,
  h2,
  h3 {
    margin-top: 0;
  }

  button,
  input {
    font-family: inherit;
  }
`;

export const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <SessionProvider>
      <GlobalStyle />
      {children}
    </SessionProvider>
  );
};
