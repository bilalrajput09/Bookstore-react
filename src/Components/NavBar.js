import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const myLinks = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Categories', path: '/categories' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav>
          <ul className={styles.navLink_container}>
            <li className={styles.logo}>Bookstore CMS</li>
            {myLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.signup_container}>
          <i className="fas fa-user-circle" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
