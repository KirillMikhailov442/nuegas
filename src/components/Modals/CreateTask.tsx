'use client';

import ModalLayout from '@components/Layouts/Modal';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';

const CreateTaskModal = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      title: Yup.string().trim().required('Введите название'),
    }),
    onSubmit: (_, { resetForm }) => {
      resetForm();
      toast.success('Успешно создано');
      dispatch(closeModal({ key: 'createObject' }));
    },
  });
  return (
    <ModalLayout
      name="createTask"
      title="Создать новую задачу"
      handleClose={() => formik.resetForm()}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
          error={formik.errors.title}
          placeholder="Введите название"
          label="Название"
        />
        <Button disabled={Object.keys(formik.errors).length > 0}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateTaskModal;
