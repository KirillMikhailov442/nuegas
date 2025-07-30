import type { FC } from 'react';
import type { ButtonProps } from '.';
import styles from './Button.module.scss';
import { Tooltip } from 'antd';
import clsx from 'clsx';

const ButtonSecondary: FC<ButtonProps> = ({
  children,
  title,
  size = 'medium',
  className,
  ...props
}) => {
  return (
    <Tooltip title={title}>
      <button
        className={clsx(
          styles.secondary,
          size == 'medium' && styles.medium,
          className,
        )}
        {...props}>
        {children}
      </button>
    </Tooltip>
  );
};

export default ButtonSecondary;
