import styles from './Select.module.css';

interface OptionProps {
  id: string;
  name: string;
  value: string;
  displayValue: React.ReactNode;
  secondaryValue?: React.ReactNode;
  role?: string;
}

const Option = ({ id, name, value, displayValue, secondaryValue, role }: OptionProps) => {
  return (
    <>
      <label className={styles.label} tabIndex={0} htmlFor={id}>
        {displayValue}
        {secondaryValue}
      </label>
      <input className="sr-only" type="radio" id={id} name={name} value={value} role={role} />
    </>
  );
};

export default Option;
