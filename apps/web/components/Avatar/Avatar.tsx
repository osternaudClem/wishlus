import styled from 'styled-components';
import Image from 'next/image';
import { colors } from '../../constants/style/colors';

const Wrapper = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.primary[200]};
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

interface AvatarProps {
  className?: string;
  src?: string;
}

const Avatar = ({ className = '', src = '' }: AvatarProps): JSX.Element => {
  return (
    <Wrapper className={className}>
      <StyledImage
        alt="Profile picture"
        height={40}
        src={src}
        width={40}
      />
    </Wrapper>
  );
};

export default Avatar;
