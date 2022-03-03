import Link from 'next/link';
import styles from './Button.module.css';
import TripleArrows from './TripleArrows';

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return (
    <Link href="/about">
      <a className={styles.btn}>
        <span>{children}</span>
        <span>
          <TripleArrows />
        </span>
      </a>
    </Link>
  );
};

export default Button;
