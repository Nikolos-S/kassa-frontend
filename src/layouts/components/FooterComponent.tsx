import styles from '../mainLayout.module.scss';
import { useState } from 'react';
import { useAuth } from '../../context';

const FooterComponent:React.FC = () => {

  const { logOut, loggedData } = useAuth();
  const handleLogout = () => {
    if(logOut && loggedData) {
      logOut();
    }
  };
  const [state, setState] = useState<string>('');

  return (
  <>
    <button
    onClick={handleLogout}
      type="button"
      className={`btn btn-outline-light ${styles.btnIcon} ${styles.bgExit}`}
    />
    <span>{`Смена открыта: ${state}`}</span>
    <span>{`Кассир: ${state}`}</span>
    <button type="button" className={`btn btn-outline-light ${styles.btnIcon} ${styles.bgMistake}`} />
  </>)
}

export { FooterComponent };