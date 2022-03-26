import styles from './Select.module.css';

interface OptionProps {
  id: string;
  name: string;
  value: string;
  displayValue: React.ReactNode;
  optionSVG?: React.ReactNode;
}

const Option = ({ id, name, value, displayValue, optionSVG }: OptionProps) => {
  return (
    <>
      <label className={styles.label} tabIndex={0} htmlFor={id}>
        {displayValue}
        {optionSVG}
      </label>
      <input className="sr-only" type="radio" id={id} name={name} value={value} />
    </>
  );
};

export default Option;
