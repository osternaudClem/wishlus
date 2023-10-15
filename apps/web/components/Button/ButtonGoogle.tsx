import styled from 'styled-components';
import { GoogleIcon } from '../../assets/icons';
import { colors } from '../../constants/style/colors';
import Button from './Button';

const StyledButton = styled(Button)`
  background: #fff;
  color: ${colors.primary['900']};

  &:hover {
    background-color: #efefef;
  }
`;

const ButtonLeftIcon = styled(GoogleIcon)`
  font-size: 1.5em;
`;

interface ButtonGoogleProps {
  className?: string;
  onClick: () => void;
}

const ButtonGoogle = ({
  className = '',
  onClick,
}: ButtonGoogleProps): JSX.Element => {
  return (
    <StyledButton
      className={className}
      leftIcon={<ButtonLeftIcon />}
      onClick={onClick}
    >
      Sin in with Google
    </StyledButton>
  );
};

export default ButtonGoogle;
