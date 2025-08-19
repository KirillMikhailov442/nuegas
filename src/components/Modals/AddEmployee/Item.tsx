import { FC } from 'react';
import styles from './AddEmployee.module.scss';
import { Avatar, Radio } from '@chakra-ui/react';
import { IEmployee } from '@/types/Employee';

const Item: FC<IEmployee> = ({ name, surname, img, id }) => {
  return (
    <li role="button">
      <label className={styles.item}>
        <Radio value={id} colorScheme="blue" />
        <Avatar name={name + surname} src={img} size={'sm'} />
        <p className={styles.fullName}>
          {name} {surname}
        </p>
      </label>
    </li>
  );
};

export default Item;
