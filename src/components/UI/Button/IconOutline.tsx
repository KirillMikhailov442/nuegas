import type { FC } from 'react';
import styles from './Button.module.scss';
import type { ButtonProps } from '.';
import { Tooltip } from 'antd';

const ButtonIconOutline: FC<ButtonProps> = ({ children, title }) => {
  return (
    <Tooltip
      mouseEnterDelay={0.5}
      title={title}>
      <button className={styles.iconOutline}>{children}</button>
    </Tooltip>
  );
};

export default ButtonIconOutline;
