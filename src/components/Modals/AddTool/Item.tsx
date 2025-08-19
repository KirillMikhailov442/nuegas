import { FC } from 'react';
import styles from './AddTool.module.scss';
import { Radio } from '@chakra-ui/react';
import { ITool } from '@/types/Tool';

const Item: FC<ITool> = ({ name, id }) => {
  return (
    <li role="button">
      <label className={styles.item}>
        <Radio value={id} colorScheme="blue" />
        <p className={styles.name}>{name}</p>
      </label>
    </li>
  );
};

export default Item;
