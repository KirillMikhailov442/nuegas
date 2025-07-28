import type { FC } from 'react';
import styles from './Tool.module.scss';
import { Minus } from 'lucide-react';

const ToolItem: FC = () => {
  return (
    <li className={styles.item}>
      <h5 className={styles.name}>Лестница</h5>
      <button className={styles.minus}>
        <Minus size={20} />
      </button>
    </li>
  );
};

export default ToolItem;
