export const AuthTypes = Object.freeze({
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
});

export type AuthType = keyof typeof AuthTypes;
