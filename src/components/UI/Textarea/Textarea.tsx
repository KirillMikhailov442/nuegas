import clsx from 'clsx';
import { FC, HTMLAttributes, useState } from 'react';
import styles from './Textarea.module.scss';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  rows?: number;
  readOnly?: boolean;
  value?: string;
  name?: string;
  error?: string;
}

const Textarea: FC<TextareaProps> = ({
  className,
  label,
  children,
  error,
  value,
  onChange = () => {},
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={clsx(styles.textarea, error && styles.textareaError)}
        onChange={e => {
          setInputValue(e.target.value);
          onChange(e);
        }}
        value={inputValue}
        {...props}>
        {children}
      </textarea>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
export default Textarea;
