import styles from './loginPage.module.scss';

const LoginPage: React.FC = () => {
  console.log(import.meta.env.VITE_REACT_APP_BASE_URL);

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = import.meta.env.VITE_REACT_APP_BASE_URL;
    window.location.href = `${url}/oauth2/authorization/artmark?redirect_uri=${window.location.origin}/oauth2/success`;
  };
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={signIn}>
        <legend className='text-center'>Вход в систему</legend>
        <button type="submit" className="btn btn-primary btnSubmit">Войти</button>
      </form>
    </div>
  )
};

export { LoginPage };