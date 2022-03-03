import AnimationSelect from '../AnimationsSelect';
import DarkmodeToggle from '../DarkmodeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <li className={styles.link}>Home</li>
      <li className={styles.link}>Projects</li>
      <li className={styles.link}>About</li>
      <li>Lang</li>
      <li>
        <AnimationSelect />
      </li>
      <li>
        <DarkmodeToggle />
      </li>
      <li>Hamburger menu</li>
    </nav>
  );
};

export default Navbar;
