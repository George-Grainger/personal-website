import React, { useEffect, useState } from 'react';
import { useMotionPreference } from '../../context/MotionPreferenceProvider';
import Select from '../Select';
import AnimationsSVG from '../svg/Animations';
import cn from 'classnames';
import styles from './AnimationSelect.module.css';

const AnimationSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedMotionPreference, setMotionPreference } = useMotionPreference();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <AnimationsSVG
        aria-label="Show animations?"
        role="button"
        className={cn(styles.button, styles.svg)}
        onClick={() => setMotionPreference(resolvedMotionPreference === 'no-preference' ? 'reduce' : 'no-preference')}
      />
      <Select className={styles.select} legend="Show animations?" defaultValue={resolvedMotionPreference} onChange={setMotionPreference}>
        <Select.Option
          id="animations-on"
          name="animation-preference"
          value="no-preference"
          displayValue="Animations On"
          secondaryValue={<AnimationsSVG className={styles.svg} />}
        />
        <Select.Option
          id="animations-less"
          name="animation-preference"
          value="reduce"
          displayValue="Animations Less"
          secondaryValue={<AnimationsSVG className={cn(styles.svg, styles.strikethrough)} />}
        />
      </Select>
    </>
  );
};

export default AnimationSelect;
