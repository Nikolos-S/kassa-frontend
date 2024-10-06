import { Link, useMatch } from "react-router-dom";
import styles from '../mainLayout.module.scss';

type CustomLinkProps = {
  children: React.ReactNode,
  to: string,
};

const CustomLink: React.FC<CustomLinkProps> = ({ children, to }) => {
  const match = useMatch(to);
  return (
    <Link to={to} className={`${styles.link} ${match ? styles.activeLink : ''}`}>
      <span>
        {children}
      </span>
    </Link>
  )
};

export { CustomLink };