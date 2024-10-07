import React, { useState, useMemo } from 'react';
import { AuthContext, AuthData } from './index.tsx';

import { getWSAndRole } from '../resourses/apiAuth.ts';

type Props = { children: React.ReactNode };


const authDataKey = 'auth_data';

const AuthProvider: React.FC<Props> = ({ children }) => {
  
  const state = JSON.parse(sessionStorage.getItem(authDataKey) || '{}') || {};

  const [loggedData, setLoggedData] = useState(state);

  const logOut = () => {
    sessionStorage.removeItem(authDataKey);
    setLoggedData(null);
  };

  const updateAllData = ({
    accessToken,
    username,
    ws,
    roles
  }: AuthData) => {
    const data = {
      accessToken, username, ws, roles,
  };
  sessionStorage.setItem(authDataKey, JSON.stringify(data));
  setLoggedData(data);
};
const getAuthData = async (access: string) => {
  let error: string;
  try {
    const response = await getWSAndRole(access);
    updateAllData({
      accessToken: access,
      username: response.data.fio,
      ws: response.data.workspace,
      roles: response.data.roles,
  })
  } catch (e: unknown) {
    if (e
      && (e as { message: string; code: string }).message === 'Network Error'
      && (e as { code: string }).code === 'ECONNABORTED')
        {
      error = 'Ошибка соединения';
    } else {
      error = (e as { response: { data: { message: string } } })?.response?.data?.message || 'Неожиданная ошибка';
    }
    return Promise.reject(error);
  }
  return Promise.resolve();
};
  const value = useMemo(() => ({
    loggedData,
    getAuthData,
    logOut,
  }), [loggedData]);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };