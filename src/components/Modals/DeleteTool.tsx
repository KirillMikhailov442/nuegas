'use client';

import type { FC } from 'react';
import ModalLayout from '@components/Layouts/Modal';
import { CircleAlert } from 'lucide-react';
import Button from '@components/UI/Button';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@/store/slices/modals';
import useAppSelector from '@hooks/useAppSelector';
import { useToolDelete } from '@hooks/useTool';
import { toast } from 'sonner';
import { useQueryClient } from 'react-query';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useMediaQuery } from '@chakra-ui/react';

const DeleteToolModal: FC = () => {
  const dispatch = useAppDispatch();
  const query = useQueryClient();
  const isOpen = useAppSelector(state => state.modals.visibles.deleteTool);
  const id = useAppSelector(state => state.modals.params.deleteTool);
  const deleteTool = useToolDelete(
    () => {
      query.invalidateQueries(['tools']);
      dispatch(closeModal({ key: 'deleteTool' }));
      dispatch(removeModalParam({ key: 'deleteTool' }));
      toast.success('Успешно удалено');
    },
    () => {},
  );

  const [isTablet] = useMediaQuery('(max-width: 768px)');

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          dispatch(closeModal({ key: 'deleteObject' }));
          dispatch(removeModalParam({ key: 'deleteObject' }));
        }}>
        <div className="mx-8 my-6">
          <CircleAlert
            className="mx-auto text-[var(--error-500)] mb-5"
            size={120}
          />
          <h4 className="text-center">
            Вы точно хотите удалить этот инструмент?
          </h4>
          <footer className="flex gap-4 mt-15 mb-10">
            <Button
              variant="secondary"
              onClick={() => dispatch(closeModal({ key: 'deleteTool' }))}
              className="basis-1/2">
              Отмена
            </Button>
            <Button
              isLoading={deleteTool.isLoading}
              disabled={deleteTool.isLoading}
              variant="danger"
              onClick={() => {
                deleteTool.mutate(id);
              }}
              className="basis-1/2">
              Да
            </Button>
          </footer>
        </div>
      </BottomSheet>
    );
  }

  if (!id) {
    return (
      <ModalLayout name="deleteTool" title="Удалить инструмент" size="lg">
        Загрузка...
      </ModalLayout>
    );
  }

  return (
    <ModalLayout name="deleteTool" title="Удалить инструмент" size="lg">
      <CircleAlert className="mx-auto text-[var(--error-500)] mb-4" size={80} />
      <h4 className="text-center">Вы точно хотите удалить этот инструмент?</h4>
      <footer className="flex gap-4 mt-4">
        <Button
          variant="secondary"
          onClick={() => {
            dispatch(removeModalParam({ key: 'deleteTool' }));
            dispatch(closeModal({ key: 'deleteTool' }));
          }}
          className="basis-1/2">
          Отмена
        </Button>
        <Button
          disabled={deleteTool.isLoading}
          isLoading={deleteTool.isLoading}
          variant="danger"
          onClick={() => {
            deleteTool.mutate(id);
          }}
          className="basis-1/2">
          Да
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default DeleteToolModal;
