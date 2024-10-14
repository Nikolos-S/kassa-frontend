import React, { useMemo, useRef } from 'react';
import { GlobalHotKeys, KeyMap } from 'react-hotkeys';

import { KeyDownContext } from './index.tsx';


type Props = { children: React.ReactNode };

const KeyDownProvider: React.FC<Props> = ({ children }) => {
  const linkArmRef = useRef<HTMLAnchorElement | null>(null);
  const openRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const keyMap: KeyMap = {
    NEXT_DOWN: 'down',
  };

  const handlers = {
    NEXT_DOWN: () => console.log('arm'),

  };

  const value = useMemo(() => ({
    linkArmRef,
    openRef,
    closeRef,
  }), []);
  return (
    <KeyDownContext.Provider value={value}>
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
      {children}
    </KeyDownContext.Provider>
  );
};

export { KeyDownProvider };