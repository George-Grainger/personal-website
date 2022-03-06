interface Props {
  className?: string;
  'aria-label'?: string;
  role?: string;
  onClick?: () => void;
}

const AnimationsSVG = (props: Props) => {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        strokeWidth="0"
        d="M8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8V28H8V8H28V4H8ZM16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16V36H16V16H36V12H16ZM40 24V40H24V24H40ZM40 20H24C22.9391 20 21.9217 20.4214 21.1716 21.1716C20.4214 21.9217 20 22.9391 20 24V40C20 41.0609 20.4214 42.0783 21.1716 42.8284C21.9217 43.5786 22.9391 44 24 44H40C41.0609 44 42.0783 43.5786 42.8284 42.8284C43.5786 42.0783 44 41.0609 44 40V24C44 22.9391 43.5786 21.9217 42.8284 21.1716C42.0783 20.4214 41.0609 20 40 20ZM28 26V38L36 32L28 26Z"
      />
      <path strokeWidth="4" d="M2 1.5L47.5 47" />
    </svg>
  );
};

export default AnimationsSVG;
