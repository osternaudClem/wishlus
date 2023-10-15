'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { WishlistBackgroundPath } from '../assets/images';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSide = styled.div`
  position: relative;
  margin: 10px;
`;

const RightSideCover = styled(Image)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

interface AuthLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const AuthLayout = ({
  className = '',
  children,
}: AuthLayoutProps): JSX.Element => {
  return (
    <Wrapper className={className}>
      <LeftSide>{children}</LeftSide>
      <RightSide>
        <RightSideCover
          alt="Movie background"
          fill
          src={WishlistBackgroundPath}
          style={{ objectFit: 'cover' }}
        />
      </RightSide>
    </Wrapper>
  );
};

export default AuthLayout;
