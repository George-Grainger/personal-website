import React, { useState } from 'react';
import cn from 'classnames';
import styles from './CustomSelect.module.css';

interface Props {
  className: string;
  legend: string;
  items: { id: string; value: string; displayValue: string; displaySVG: React.ReactNode }[];
  defaultValue: string | undefined;
  updateFunction: (a: string) => void;
}

const CustomSelect = ({ className, legend, items, defaultValue, updateFunction }: Props) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <div
      className={cn(className, styles.wrapper, optionsVisible ? styles.show : '')}
      onBlur={(e) => !e.currentTarget.matches(':focus-within') && setOptionsVisible(false)}
    >
      <button arial-hidden="true" className={styles.title} onClick={() => setOptionsVisible(!optionsVisible)}>
        {items.find((item) => item.value === defaultValue)?.displayValue || 'Select an option'}
      </button>
      <fieldset defaultValue={defaultValue} className={styles.select} onClick={() => setOptionsVisible(false)}>
        <legend className="sr-only">{legend}</legend>
        {items.map(({ id, value, displayValue, displaySVG }) => (
          <React.Fragment key={id}>
            <input className="sr-only" type="radio" id={id} name={id} value={value} onClick={(e) => updateFunction((e.target as HTMLInputElement).value)} />
            <label className={styles.label} tabIndex={0} htmlFor={id}>
              {displayValue}
              {displaySVG}
            </label>
          </React.Fragment>
        ))}
      </fieldset>
    </div>
  );
};

export default CustomSelect;
