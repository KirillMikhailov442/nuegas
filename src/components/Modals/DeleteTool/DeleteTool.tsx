'use client'

import type { FC } from 'react';
import styles from './DeleteTool.module.scss';
import ModalLayout from '@/components/Layouts/Modal/Modal';
import { CircleAlert } from 'lucide-react';
import Button from '@/components/UI/Button';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';

const DeleteToolModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <ModalLayout
      name="deleteTool"
      title="Удалить инструмент"
      size="lg">
      <CircleAlert
        className={styles.icon}
        size={80}
      />
      <h4 className={styles.title}>Вы точно хотите удалить этот инструмент?</h4>
      <footer className={styles.footer}>
        <Button
          onClick={() => dispatch(closeModal({ key: 'deleteTool' }))}
          className={styles.exit}>
          Отмена
        </Button>
        <Button
          onClick={() => {
            dispatch(closeModal({ key: 'deleteTool' }));
          }}
          className={styles.danger}>
          Да
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default DeleteToolModal;
