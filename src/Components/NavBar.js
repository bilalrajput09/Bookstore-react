import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const myLinks = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Categories', path: '/categories' },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLink_container}>
          {myLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
