import React, { useRef } from "react";
import { Outlet } from "react-router-dom";

import { MainHeader } from "./components/MainHeader";
import { FooterComponent } from "./components/FooterComponent";
import styles from './mainLayout.module.scss'

const MainLayout: React.FC = () => {

  return (
    <div>
      <header className={styles.layout}>
        <MainHeader />
      </header>
      <main className={styles.mt72}>
      <Outlet />
      </main>
      <footer className={styles.footer}>
        <FooterComponent />
      </footer>
    </div>
  )
};

export { MainLayout };