import cn from 'classnames';
import styles from './svg.module.css';

const Sun = ({ className = '' }: { className?: string }) => {
  return (
    <svg className={cn(className, styles.sun)} width="172" height="172" viewBox="0 0 172 172" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M86 140C115.823 140 140 115.823 140 86C140 56.1766 115.823 32 86 32C56.1766 32 32 56.1766 32 86C32 115.823 56.1766 140 86 140Z"
          fill="url(#sun-highlight)"
        />
      </g>
      <defs>
        <radialGradient id="sun-highlight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(86 86) rotate(90) scale(54)">
          <stop stopColor="var(--yellow-1)" />
          <stop offset="1" stopColor="var(--yellow-2)" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Sun;
