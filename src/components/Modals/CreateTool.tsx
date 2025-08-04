'use client';

import ModalLayout from '@/components/Layouts/Modal';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import { useToolCreate } from '@/hooks/useTool';

const CreateToolModal = () => {
  const dispatch = useAppDispatch();
  const creat = useToolCreate(() => {
    toast.success('Успешно создано');
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
    onSubmit: ({ name }) => {
      creat.mutate({ name });
    },
  });
  return (
    <ModalLayout name="createTool" title="Создать новый инструмент">
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
