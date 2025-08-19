'use client';

import ModalLayout from '@components/Layouts/Modal';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import { useToolCreate } from '@hooks/useTool';
import { useQueryClient } from 'react-query';
import useAppSelector from '@hooks/useAppSelector';
import { useMediaQuery } from '@chakra-ui/react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useParams } from 'next/navigation';
import { useMicrotasksCreate } from '@/hooks/useMicrotasks';

const CreateMicrotaskModal = () => {
  const dispatch = useAppDispatch();
  const query = useQueryClient();
  const taskId = useParams<{ id: string }>().id;
  const isOpen = useAppSelector(state => state.modals.visibles.createTool);
  const create = useMicrotasksCreate(() => {
    toast.success('Успешно создано');
    query.invalidateQueries(['task', taskId]);
    dispatch(closeModal({ key: 'createMicrotask' }));
  });
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      name: Yup.string().trim().required('Введите название'),
    }),
    onSubmit: ({ name }) => {
      create.mutate({
        title: name,
        taskId,
        description: '',
        isCompleted: false,
      });
    },
  });
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          formik.resetForm();
          dispatch(closeModal({ key: 'createMicrotask' }));
        }}>
        <div className="p-8 flex flex-col gap-4 h-[30dvh]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              error={formik.errors.name}
              placeholder="Введите название"
              label="Название"
            />
            <Button
              isLoading={create.isLoading}
              disabled={Object.keys(formik.errors).length > 0}>
              Создать
            </Button>
          </form>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      name="createMicrotask"
      title="Создать новую микрозадачу"
      handleClose={() => formik.resetForm()}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          error={formik.errors.name}
          placeholder="Введите название"
          label="Название"
        />
        <Button
          isLoading={create.isLoading}
          disabled={Object.keys(formik.errors).length > 0}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateMicrotaskModal;
