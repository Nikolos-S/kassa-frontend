import React, { useEffect } from 'react';
import { useMatch } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { useSession } from '../../context';
import { useKeyDown } from '../../context';

import routes from '../../routes';

import styles from './arm.module.scss';

const ManagerrarmPage: React.FC = () => {
  const { sessionData, openSession, closeSession } = useSession();

  const { openRef, closeRef } = useKeyDown();
  const { t } = useTranslation();

  const match = useMatch(routes.arm());

  useEffect(() => {
    if (sessionData?.id) {
      closeRef?.current?.focus();
    } else {
      openRef?.current?.focus();
    }
  }, [match, sessionData, openRef, closeRef])
  return (
    <div className={`container d-flex ${styles.armGap}`}>
      <div className={styles.armCard}> 
        <div className={`${styles.armIcon} ${styles.bgOn}`} />
        <button
          type="button"
          disabled={sessionData?.id !== undefined}
          className="btn btn-primary btnSubmit"
          ref={openRef}
          onClick={openSession}
        >
          {t('btn.openSession')}
        </button>
      </div>
      <div className={styles.armCard}>


<div className={`${styles.armIcon} ${styles.bgOff}`} />
      <button
        type="button"
        disabled={sessionData?.id === undefined}
        className="btn btn-primary btnSubmit"
        ref={closeRef}
        onClick={closeSession}
        >
          {t('btn.closeSession')}
      </button>
      </div>
    </div>
  )
};

export { ManagerrarmPage };