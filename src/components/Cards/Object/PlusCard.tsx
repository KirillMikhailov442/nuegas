import type { FC } from 'react';
import styles from './Object.module.scss';
import { FolderPlus } from 'lucide-react';

const ObjectPlusCard: FC = () => {
  return (
    <li
      role="button"
      className={styles.cardPlus}>
      <FolderPlus
        strokeWidth={1}
        size={60}
      />
      <h5>Создать новый проект</h5>
    </li>
  );
};

export default ObjectPlusCard;
