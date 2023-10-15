import styled, { css } from 'styled-components';
import { useState, useCallback, useMemo } from 'react';
import { border } from '../../constants/style/border';
import { colors } from '../../constants/style/colors';
import { HideIcon, ShowIcon } from '../../assets/icons';

const Wrapper = styled.div``;

const StyledLabel = styled.label`
  display: block;
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

interface StyledInputProps {
  $isError: boolean;
}

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  border: 0;
  outline: none;
  padding: 0.75em 1em;
  border-radius: ${border.radius.lg};
  box-shadow: 0 0 0 1px #e0e0e0 inset;
  width: 100%;
  font-size: 1.1em;
  background-color: ${colors.primary['100']};

  transition: box-shadow 0.2s ease-in-out;

  ${({ $isError }) =>
    $isError
      ? css`
          box-shadow: 0 0 0 3px red inset;
        `
      : null};

  &:focus {
    box-shadow: 0 0 0 3px ${colors.primary['400']} inset;

    ${({ $isError }) =>
      $isError
        ? css`
            box-shadow: 0 0 0 3px red inset;
          `
        : null};
  }
`;

const TogglePasswordView = styled.button`
  position: absolute;
  right: 0.5em;
  top: 50%;
  color: ${colors.primary['900']};
  font-size: 1.5em;
  background: transparent;
  border: 0;
  cursor: pointer;
  transform: translateY(-40%);
`;

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  showTogglePassword?: boolean;
}

const TextField = ({
  className = '',
  label,
  id,
  type = 'text',
  isError = false,
  errorMessage = '',
  showTogglePassword = false,
  ...inputProps
}: TextFieldProps): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisible = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  }, []);

  const fieldType = useMemo(() => {
    if (type === 'password') {
      return isPasswordVisible ? 'text' : 'password';
    }

    return type;
  }, [isPasswordVisible, type]);

  return (
    <Wrapper className={className}>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      <InputWrapper>
        <StyledInput
          $isError={isError}
          id={id}
          type={fieldType}
          {...inputProps}
        />

        {showTogglePassword && type === 'password' ? (
          <TogglePasswordView
            onClick={handleTogglePasswordVisible}
            type="button"
          >
            {isPasswordVisible ? <ShowIcon /> : <HideIcon />}
          </TogglePasswordView>
        ) : null}
      </InputWrapper>
      {isError ? <p>{errorMessage}</p> : null}
    </Wrapper>
  );
};

export default TextField;
