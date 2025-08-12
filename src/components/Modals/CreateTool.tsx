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

const CreateToolModal = () => {
  const dispatch = useAppDispatch();
  const query = useQueryClient();
  const isOpen = useAppSelector(state => state.modals.visibles.createTool);
  const creat = useToolCreate(() => {
    toast.success('Успешно создано');
    query.invalidateQueries(['tools']);
    dispatch(closeModal({ key: 'createTool' }));
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
    onSubmit: ({ name }, { resetForm }) => {
      resetForm();
      creat.mutate({ name });
    },
  });
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          formik.resetForm();
          dispatch(closeModal({ key: 'createTool' }));
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
              isLoading={creat.isLoading}
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
      name="createTool"
      title="Создать новый инструмент"
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
          isLoading={creat.isLoading}
          disabled={Object.keys(formik.errors).length > 0}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateToolModal;
