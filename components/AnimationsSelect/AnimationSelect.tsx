import { useEffect, useState } from 'react';
import { useMotionPreference } from '../../context/MotionPreferenceProvider';
import styles from './AnimationSelect.module.css';

const AnimationSelect = () => {
  const { setMotionPreference, resolvedMotionPreference } = useMotionPreference();

  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <label className="sr-only" htmlFor="animations-select">
        Show animations?
      </label>
      <svg aria-label="Show animations?" className={styles.button} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4V24H4V4H24V0H4ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12V32H12V12H32V8H12ZM36 20V36H20V20H36ZM36 16H20C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20V36C16 37.0609 16.4214 38.0783 17.1716 38.8284C17.9217 39.5786 18.9391 40 20 40H36C37.0609 40 38.0783 39.5786 38.8284 38.8284C39.5786 38.0783 40 37.0609 40 36V20C40 18.9391 39.5786 17.9217 38.8284 17.1716C38.0783 16.4214 37.0609 16 36 16ZM24 22V34L32 28L24 22Z" />
      </svg>
      <div className={styles.wrapper}>
        <select
          className={styles.select}
          id="animations-select"
          name="animations-select"
          defaultValue={resolvedMotionPreference}
          onChange={(e) => setMotionPreference(e.target.value)}
        >
          <option value="no-preference">Animations On</option>
          <option value="reduced">Animations Off</option>
        </select>
      </div>
    </>
  );
};

export default AnimationSelect;
