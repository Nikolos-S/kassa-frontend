import { Outlet } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { FooterComponent } from "./components/FooterComponent";
import styles from './mainLayout.module.scss'

const MainLayout: React.FC = () => {
  return (
    <>
      <header className={styles.layout}>
        <MainHeader />
      </header>
      <main className="mt-5">
      <Outlet />
      </main>
      <footer className={styles.footer}>
        <FooterComponent />
      </footer>
    </>
  )
};

export { MainLayout };