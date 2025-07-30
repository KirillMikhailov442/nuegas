'use client';
import type { FC } from 'react';
import ModalLayout from '@/components/Layouts/Modal';
import { CircleAlert } from 'lucide-react';
import Button from '@components/UI/Button';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal } from '@store/slices/modals';

const DeleteEmployeeModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <ModalLayout name="deleteEmployee" title="Удалить рабочего" size="lg">
      <CircleAlert className="mx-auto text-[var(--error-600)] mb-4" size={80} />
      <h4 className="text-center">Вы точно хотите удалить этого рабочего?</h4>
      <footer className="flex gap-4 mt-4">
        <Button
          variant="secondary"
          onClick={() => dispatch(closeModal({ key: 'deleteEmployee' }))}
          className="basis-1/2">
          Отмена
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(closeModal({ key: 'deleteEmployee' }));
          }}
          className="basis-1/2">
          Да
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default DeleteEmployeeModal;
