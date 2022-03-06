import React, { useEffect, useState } from 'react';
import { useMotionPreference } from '../../context/MotionPreferenceProvider';
import CustomSelect from '../CustomSelect';
import AnimationsSVG from '../svg/Animations';
import cn from 'classnames';
import styles from './AnimationSelect.module.css';

const AnimationSelect = () => {
  const options = [
    {
      id: 'animations-on',
      value: 'no-preference',
      displayValue: 'Animations on',
      displaySVG: <AnimationsSVG className={styles.svg} />
    },
    {
      id: 'animations-off',
      value: 'reduce',
      displayValue: 'Animations off',
      displaySVG: <AnimationsSVG className={cn(styles.svg, styles.strikethrough)} />
    }
  ];
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
      <CustomSelect
        className={styles.select}
        legend="Show animations?"
        items={options}
        defaultValue={resolvedMotionPreference}
        updateFunction={setMotionPreference}
      />
    </>
  );
};

export default AnimationSelect;
