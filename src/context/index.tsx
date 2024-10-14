import { createContext, useContext } from 'react';

export type AuthData = {
  accessToken: string,
  refreshToken: string,
  username: string,
  ws: {name: string, code: string},
  roles: string[],
};

export type SessionData = {
  created: string
  id: string,
};

type AuthContext = {
  loggedData: AuthData,
  getAuthData: (access: string, refresh: string) => Promise<void> | Promise<Error>,
  logOut: () => void,
};

type SessionContext = {
  openSession: () => void,
  closeSession: () => void,
  sessionData: SessionData,
};

type KeyDownContext = {
  linkArmRef: React.MutableRefObject<HTMLAnchorElement | null>,
  openRef: React.MutableRefObject<HTMLButtonElement | null>,
  closeRef: React.MutableRefObject<HTMLButtonElement | null>,
}

export const AuthContext = createContext<Partial<AuthContext>>({});
export const SessionContext = createContext<Partial<SessionContext>>({});
export const KeyDownContext = createContext<Partial<KeyDownContext>>({});

export const useAuth = () => useContext(AuthContext);
export const useSession = () => useContext(SessionContext);
export const useKeyDown = () => useContext(KeyDownContext);