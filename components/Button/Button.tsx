import Link from 'next/link';
import cn from 'classnames';
import styles from './Button.module.css';
import TripleArrows from './TripleArrows';

interface Props {
  className?: string;
  children: string;
}

const Button = ({ className, children }: Props) => {
  return (
    <Link href="/about">
      <a className={cn(styles.btn, className || '')}>
        <span>{children}</span>
        <span>
          <TripleArrows />
        </span>
      </a>
    </Link>
  );
};

export default Button;
