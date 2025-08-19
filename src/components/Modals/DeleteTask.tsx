'use client';

import type { FC } from 'react';
import ModalLayout from '@components/Layouts/Modal';
import { CircleAlert } from 'lucide-react';
import Button from '@components/UI/Button';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@/store/slices/modals';
import { useMediaQuery } from '@chakra-ui/react';
import useAppSelector from '@/hooks/useAppSelector';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useTaskDelete } from '@/hooks/useTasks';
import { useQueryClient } from 'react-query';
import { useParams } from 'next/navigation';

const DeleteTaskModal: FC = () => {
  const dispatch = useAppDispatch();
  const [isTablet] = useMediaQuery('(max-width: 768px)');
  const isOpen = useAppSelector(state => state.modals.visibles.deleteTask);
  const taskId = useAppSelector(state => state.modals.params.deleteTask);
  const projectId = useParams<{ id: string }>().id;
  const query = useQueryClient();
  const deleteTask = useTaskDelete(() => {
    query.invalidateQueries(['tasks', projectId]);
    dispatch(removeModalParam({ key: 'deleteTask' }));
    dispatch(closeModal({ key: 'deleteTask' }));
  });

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => dispatch(closeModal({ key: 'deleteTask' }))}>
        <div className="mx-8 my-6">
          <CircleAlert
            className="mx-auto text-[var(--error-500)] mb-5"
            size={120}
          />
          <h4 className="text-center">Вы точно хотите удалить этот задачу?</h4>
          <footer className="flex gap-4 mt-15 mb-10">
            <Button
              variant="secondary"
              onClick={() => dispatch(closeModal({ key: 'deleteTask' }))}
              className="basis-1/2">
              Отмена
            </Button>
            <Button
              onClick={() => {
                deleteTask.mutate(taskId);
              }}
              variant="danger"
              className="basis-1/2">
              Да
            </Button>
          </footer>
        </div>
      </BottomSheet>
    );
  }
  return (
    <ModalLayout name="deleteTask" title="Удалить объект" size="lg">
      <CircleAlert className="mx-auto text-[var(--error-500)] mb-4" size={80} />
      <h4 className="text-center">Вы точно хотите удалить эту задачу?</h4>
      <footer className="flex gap-4 mt-4">
        <Button
          variant="secondary"
          onClick={() => dispatch(closeModal({ key: 'deleteTask' }))}
          className="basis-1/2">
          Отмена
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteTask.mutate(taskId);
          }}
          className="basis-1/2">
          Да
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default DeleteTaskModal;
