import type { FC, HTMLAttributes, ReactNode } from 'react';
import ButtonIconOutline from './IconOutline';
import ButtonPrimary from './Primary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'icon-outline' | 'primary';
  label?: string;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'big';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'icon-outline':
      return <ButtonIconOutline {...props} />;
    case 'primary':
      return <ButtonPrimary {...props} />;
    default:
      return <ButtonPrimary {...props} />;
  }
};

export default Button;
