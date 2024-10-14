import { useTranslation } from 'react-i18next';
import { useAuth, useSession } from '../../context';

import styles from '../mainLayout.module.scss';

const FooterComponent:React.FC = () => {
  const { t } = useTranslation();
  const { sessionData } = useSession()

  const { logOut, loggedData } = useAuth();
  const handleLogout = () => {
    if(logOut && loggedData) {
      logOut();
    }
  };

  return (
  <>
    <button
    onClick={handleLogout}
      type="button"
      className={`btn btn-outline-light ${styles.btnIcon} ${styles.bgExit}`}
    />
    {sessionData?.created &&
      <span>{`${t('layout.sessionStatus')}${sessionData?.created}`}</span>}
    <span>{`${t('layout.this')}${loggedData?.username}`}</span>
    <button type="button" className={`btn btn-outline-light ${styles.btnIcon} ${styles.bgMistake}`} />
  </>)
}

export { FooterComponent };