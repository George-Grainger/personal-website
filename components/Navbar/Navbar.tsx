import DarkmodeToggle from '../DarkmodeToggle';
import Earth from '../svg/Earth';
import Sun from '../svg/Sun';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <li className={styles.link}>Home</li>
      <li className={styles.link}>Projects</li>
      <li className={styles.link}>About</li>
      <li>Lang</li>
      <li>Animations</li>
      <li>
        <DarkmodeToggle />
      </li>
      <li>Hamburger menu</li>
    </nav>
  );
};

export default Navbar;
