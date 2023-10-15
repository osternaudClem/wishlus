import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isSlug from 'validator/lib/isSlug';
import isStrongPassword from 'validator/lib/isStrongPassword';

const checkIsSlug = (value: string): boolean => {
  return value !== '' && isSlug(value);
};

const checkIsEmail = (value: string): boolean => {
  return value !== '' && isEmail(value);
};

const checkIsPasswordStrong = (value: string): boolean => {
  return (
    value !== '' &&
    isStrongPassword(value, {
      minSymbols: 0,
    })
  );
};

const checkIsSameValue = (
  value: string,
  comparTo: string | null | undefined
): boolean => {
  return value !== '' && value === comparTo;
};

export type ValidationType = 'slug' | 'email' | 'password' | 'equal';

interface UseTextFieldType {
  value: string;
  isError: boolean;
  updateField: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const useTextField = (
  defaultValue = '',
  validation: ValidationType[] = [],
  comparTo: string | null = null
): UseTextFieldType => {
  const [value, setValue] = useState(defaultValue);
  const [isError, setError] = useState<boolean>(false);

  const updateField = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    setValue(event.target.value);

    if (validation.includes('slug')) {
      setError(!checkIsSlug(event.target.value));
    }

    if (validation.includes('email')) {
      setError(!checkIsEmail(event.target.value));
    }

    if (validation.includes('password')) {
      setError(!checkIsPasswordStrong(event.target.value));
    }

    if (validation.includes('equal')) {
      setError(!checkIsSameValue(event.target.value, comparTo));
    }
  };

  return { value, isError, updateField, setValue };
};

export default useTextField;
