import { forwardRef } from "react";
import { Link, useMatch } from "react-router-dom";

import styles from '../mainLayout.module.scss';

type CustomLinkProps = {
  children: React.ReactNode,
  to: string,
};

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(({ children, to }, ref) => {
  const match = useMatch(to);

  return (
    <Link to={to} ref={ref} className={`${styles.link} ${match ? styles.activeLink : ''}`}>
      <span>
        {children}
      </span>
    </Link>
  );
});

export { CustomLink };