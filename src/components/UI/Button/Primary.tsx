import type { FC } from 'react';
import type { ButtonProps } from '.';
import styles from './Button.module.scss';
import { Tooltip } from 'antd';
import clsx from 'clsx';
import { CircularProgress } from '@chakra-ui/react';

const ButtonPrimary: FC<ButtonProps> = ({
  children,
  title,
  size = 'medium',
  className,
  isLoading,
  ...props
}) => {
  return (
    <Tooltip title={title}>
      <button
        className={clsx(
          styles.primary,
          size == 'medium' && styles.medium,
          className,
        )}
        {...props}>
        {isLoading && (
          <CircularProgress
            size={5}
            marginRight={3}
            isIndeterminate
            color="black"
          />
        )}
        {children}
      </button>
    </Tooltip>
  );
};

export default ButtonPrimary;
