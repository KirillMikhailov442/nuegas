import type { FC } from 'react';
import styles from './Task.module.scss';
import { ClipboardPlus } from 'lucide-react';

const TaskPlusCard: FC = () => {
  return (
    <li
      role="button"
      className={styles.cardPlus}>
      <ClipboardPlus
        strokeWidth={1}
        size={60}
      />
      <h5>Создать новый проект</h5>
    </li>
  );
};

export default TaskPlusCard;
