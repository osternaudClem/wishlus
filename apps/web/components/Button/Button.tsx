import styled from 'styled-components';
import { colors } from '../../constants/style/colors';

const Wrapper = styled.button`
  font-size: 1.2em;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.primary[500]};
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );

  transition-property: background-color, transform;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;

  color: ${colors.primary[100]};
  border: 0;
  outline: none;
  padding: 0.75em 1.5em;
  border-radius: 0.5em;

  &:hover {
    background-color: ${colors.primary[700]};
  }

  &:active {
    transform: scale(1.04);
  }
`;

const ButtonLeftIcon = styled.div`
  margin-right: 0.5em;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Button = ({
  className = '',
  children,
  leftIcon,
  type = 'button',
  ...buttonProps
}: ButtonProps): JSX.Element => {
  return (
    <Wrapper
      className={className}
      type={type}
      {...buttonProps}
    >
      {leftIcon ? <ButtonLeftIcon>{leftIcon}</ButtonLeftIcon> : null}
      {children}
    </Wrapper>
  );
};

export default Button;
