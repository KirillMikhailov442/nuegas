import type { FC } from 'react';
import styles from './Employee.module.scss';
import { Avatar } from '@chakra-ui/react';
import { Minus } from 'lucide-react';

const EmployeeItem: FC = () => {
  return (
    <li className={styles.item}>
      <Avatar
        size={'sm'}
        name="fake"
      />
      <h5 className={styles.fullName}>Андрей</h5>
      <button className={styles.minus}>
        <Minus size={20} />
      </button>
    </li>
  );
};

export default EmployeeItem;
