import { useTranslation } from 'react-i18next';

import styles from './loginPage.module.scss';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  
  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = import.meta.env.VITE_REACT_APP_BASE_URL;
    window.location.href = `${url}/oauth2/authorization/artmark?redirect_uri=${window.location.origin}/oauth2/success`;
  };
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={signIn}>
        <legend className='text-center'>{t('title.login')}</legend>
        <button type="submit" className="btn btn-primary btnSubmit">{t('btn.enter')}</button>
      </form>
    </div>
  )
};

export { LoginPage };