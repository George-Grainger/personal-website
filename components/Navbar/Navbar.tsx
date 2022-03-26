import AnimationSelect from '../AnimationsSelect';
import DarkmodeToggle from '../DarkmodeToggle';
import LanguageSelect from '../LanguageSelect';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <li className={styles.link}>Home</li>
      <li className={styles.link}>Projects</li>
      <li className={styles.link}>About</li>
      <li>
        <LanguageSelect />
      </li>
      <li>
        <AnimationSelect />
      </li>
      <li>
        <DarkmodeToggle />
      </li>
      <li>
        <svg className={styles.hamburger} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 22H0V18.3333H22V22ZM22 12.8333H0V9.16667H22V12.8333ZM22 3.66667H0V0H22V3.66667Z" />
        </svg>
      </li>
    </nav>
  );
};

export default Navbar;
