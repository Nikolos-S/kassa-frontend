import { createContext, useContext } from 'react';

export type AuthData = {
  accessToken: string,
  username: string,
  ws: {name: string, code: string},
  roles: string[],
}

type AuthContext = {
  loggedData: AuthData,
  getAuthData: (access: string) => Promise<void> | Promise<Error>,
  logOut: () => void,
}
export const AuthContext = createContext<Partial<AuthContext>>({});

export const useAuth = () => useContext(AuthContext);