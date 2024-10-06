import styles from '../mainLayout.module.scss';
import { useState } from 'react';

const FooterComponent:React.FC = () => {
  const [state, seState] = useState<string>('');
  return (
  <>
    <button type="button" className={`btn btn-outline-light ${styles.btnIcon} ${styles.bgExit}`} />
    <span>{`Смена открыта: ${state}`}</span>
    <span>{`Кассир: ${state}`}</span>
    <button type="button" className={`btn btn-outline-light ${styles.btnIcon} ${styles.bgMistake}`} />
  </>)
}

export { FooterComponent };