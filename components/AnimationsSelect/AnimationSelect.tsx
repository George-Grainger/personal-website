import React, { useEffect, useState } from 'react';
import { useMotionPreference } from '../../context/MotionPreferenceProvider';
import CustomSelect from '../Select';
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
      <CustomSelect className={styles.select} legend="Show animations?" defaultValue={resolvedMotionPreference} onChange={setMotionPreference}>
        <CustomSelect.Option
          id="animations-on"
          name="animation-preference"
          value="no-preference"
          displayValue="Animations on"
          optionSVG={<AnimationsSVG className={styles.svg} />}
        />
        <CustomSelect.Option
          id="animations-off"
          name="animation-preference"
          value="reduce"
          displayValue="Animations off"
          optionSVG={<AnimationsSVG className={cn(styles.svg, styles.strikethrough)} />}
        />
      </CustomSelect>
    </>
  );
};

export default AnimationSelect;
