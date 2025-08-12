'use client';

import type { FC } from 'react';
import ModalLayout from '@components/Layouts/Modal';
import { CircleAlert } from 'lucide-react';
import Button from '@components/UI/Button';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@/store/slices/modals';
import { useProjectDelete } from '@hooks/useProject';
import { toast } from 'sonner';
import useAppSelector from '@hooks/useAppSelector';
import { useQueryClient } from 'react-query';
import { useMediaQuery } from '@chakra-ui/react';
import { BottomSheet } from 'react-spring-bottom-sheet';

const DeleteObjectModal: FC = () => {
  const dispatch = useAppDispatch();
  const query = useQueryClient();
  const isOpen = useAppSelector(state => state.modals.visibles.deleteObject);
  const id = useAppSelector(state => state.modals.params.deleteObject);
  const deleteObject = useProjectDelete(() => {
    query.invalidateQueries(['projects']);
    dispatch(closeModal({ key: 'deleteObject' }));
    dispatch(removeModalParam({ key: 'deleteObject' }));
    toast.success('Успешно удалено');
  });

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
          <h4 className="text-center">Вы точно хотите удалить этот объект?</h4>
          <footer className="flex gap-4 mt-15 mb-10">
            <Button
              variant="secondary"
              onClick={() => dispatch(closeModal({ key: 'deleteObject' }))}
              className="basis-1/2">
              Отмена
            </Button>
            <Button
              isLoading={deleteObject.isLoading}
              disabled={deleteObject.isLoading}
              variant="danger"
              onClick={() => {
                deleteObject.mutate(id);
              }}
              className="basis-1/2">
              Да
            </Button>
          </footer>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout name="deleteObject" title="Удалить объект" size="lg">
      <CircleAlert className="mx-auto text-[var(--error-500)] mb-4" size={80} />
      <h4 className="text-center">Вы точно хотите удалить этот объект?</h4>
      <footer className="flex gap-4 mt-4">
        <Button
          variant="secondary"
          onClick={() => dispatch(closeModal({ key: 'deleteObject' }))}
          className="basis-1/2">
          Отмена
        </Button>
        <Button
          isLoading={deleteObject.isLoading}
          disabled={deleteObject.isLoading}
          variant="danger"
          onClick={() => {
            deleteObject.mutate(id);
          }}
          className="basis-1/2">
          Да
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default DeleteObjectModal;
