import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalHotKeys, HotKeys, KeyMap } from 'react-hotkeys';

import { CustomLink } from "./CustomLink";
import routes from "../../routes";
import { useKeyDown } from '../../context';
import { useSession } from '../../context';

const MainHeader: React.FC = () => {
  const { t } = useTranslation();
  const { linkArmRef, closeRef, openRef } = useKeyDown();
  const { sessionData } = useSession();

  const navigate = useNavigate();
  const keyMap: KeyMap = {
    SELECT_TAB_1: '1',
    SELECT_TAB_2: '2',
    SELECT_TAB_3: '3',
    SELECT_TAB_4: '4',
  };

  const globalHandlers = {
    SELECT_TAB_1: () => navigate(routes.sale()),
    SELECT_TAB_2: () => navigate(routes.layout()),
    SELECT_TAB_3: () => {
      navigate(routes.arm());
      if (sessionData?.id) {
        closeRef?.current?.focus();
      } else {
        openRef?.current?.focus();
      }
    },
    SELECT_TAB_4: () => navigate(routes.layout()),
  };
  const localHandlers = {
    NEXT_DOWN: () => console.log('down')
  }

  return (
    <div className="container h-100">
       <GlobalHotKeys keyMap={keyMap} handlers={globalHandlers} />
       <HotKeys keyMap={keyMap} handlers={localHandlers}></HotKeys>
      <div className="row h-100">
        <div className="col-3 d-flex align-items-end">
          <CustomLink to={routes.sale()}>{t('layout.tabEsale')}</CustomLink>
        </div>
        <div className="col-3 d-flex align-items-end">
        <CustomLink to={routes.layout()}>{t('layout.tabrefund')}</CustomLink>
        </div>
        <div className="col-3 d-flex align-items-end">
        <CustomLink to={routes.arm()} ref={linkArmRef}>{t('layout.tabArm')}</CustomLink>
        </div>
        <div className="col-3 d-flex align-items-end">
        <CustomLink to={routes.layout()}>{t('layout.tabReport')}</CustomLink>
        </div>
      </div>
    </div>
  )
};

export { MainHeader };