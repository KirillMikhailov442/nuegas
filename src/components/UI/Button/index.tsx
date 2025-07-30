import type { FC, HTMLAttributes, ReactNode } from 'react';
import ButtonIconOutline from './IconOutline';
import ButtonPrimary from './Primary';
import ButtonDanger from './Danger';
import ButtonSecondary from './Secondary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'icon-outline' | 'primary' | 'danger' | 'secondary';
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
    case 'danger':
      return <ButtonDanger {...props} />;
    case 'secondary':
      return <ButtonSecondary {...props} />;
    default:
      return <ButtonPrimary {...props} />;
  }
};

export default Button;
