import { FC } from 'react';
import styles from './Date.module.scss';
import { DatePicker } from 'antd';
import clsx from 'clsx';

interface InputDateProps {
  label?: string;
  error?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (date: string, dateString: string | string[]) => void;
}

const InputDate: FC<InputDateProps> = ({
  label,
  error,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <DatePicker
        suffixIcon={null}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
        className={clsx(styles.input, error && styles.inputError)}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
export default InputDate;
