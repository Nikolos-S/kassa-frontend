import React, { useState, useMemo } from 'react';
import moment from 'moment';
import { SessionContext, SessionData } from './index.tsx';
import { sessionOpen, sessionClose } from '../resourses/session.ts';
import { getToast  } from '../toast/tosat.ts';

type Props = { children: React.ReactNode };

const sessionKey = 'sessionData';

const SessionProvider: React.FC<Props> = ({ children }) => {
  
  const state = JSON.parse(sessionStorage.getItem(sessionKey) || '{}') || {};

  const [sessionData, setSessionData] = useState(state);
  const updateAllData = (data: SessionData) => {
  data.created = 
    moment(data.created, "YYYY-MM-DD HH:mm:ss").format("DD.MM.YYYY HH:mm")
  sessionStorage.setItem(sessionKey, JSON.stringify(data));
  setSessionData(data);
};

const openSession = async () => {
  const response = await sessionOpen();
  console.log(response)
  if (response.status === 200) {
    updateAllData(response.data);
    getToast({ text: 'Вы открыли сессию', type: 'success'});
  }
};

const closeSession = async () => {
  const response = await sessionClose();
  if (response.status === 200) {
    sessionStorage.removeItem(sessionKey);
    setSessionData({});
    getToast({ text: 'Вы закрыли сессию', type: 'warning'})
  }
}
  const value = useMemo(() => ({
    sessionData,
    openSession,
    closeSession,
  }), [sessionData]);
  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider };