import React, { FormEvent, useState } from 'react';
import Option from './Option';
import cn from 'classnames';
import styles from './Select.module.css';

interface SelectProps {
  className?: string;
  legend: string;
  defaultValue?: string;
  children: React.ReactNode;
  onChange: (a: string) => void;
}

const Select = ({ className = '', legend, defaultValue, onChange, children }: SelectProps) => {
  const getNewDisplayValue = (newValue: string | undefined) => {
    return (React.Children.toArray(children) as JSX.Element[]).filter((c) => c.props.value == newValue)[0]?.props?.displayValue || 'Choose an option';
  };

  const handleChange = (e: FormEvent<HTMLFieldSetElement>) => {
    const newValue = (e.target as HTMLInputElement).value;
    setDisplayValue(getNewDisplayValue(newValue));
    onChange(newValue);
  };

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(getNewDisplayValue(defaultValue));

  return (
    <div
      className={cn(className, styles.wrapper, optionsVisible ? styles.show : '')}
      onBlur={(e) => !e.currentTarget.matches(':focus-within') && setOptionsVisible(false)}
    >
      <button aria-hidden="true" className={styles.title} onClick={() => setOptionsVisible(!optionsVisible)}>
        {displayValue}
      </button>
      <fieldset defaultValue={defaultValue} className={styles.select} onClick={() => setOptionsVisible(false)} onChange={handleChange}>
        <legend className="sr-only">{legend}</legend>
        {children}
      </fieldset>
    </div>
  );
};

Select.Option = Option;

export default Select;
