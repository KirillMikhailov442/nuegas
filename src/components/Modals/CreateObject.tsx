'use client';

import ModalLayout from '@/components/Layouts/Modal';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import Textarea from '@UI/Textarea/Textarea';
import DropZone from '../DropZone/Images';

const CreateObjectModal = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      title: Yup.string().trim().required('Введите название'),
      description: Yup.string().trim().required('Введите описание'),
    }),
    onSubmit: () => {
      toast.success('Успешно создано');
      dispatch(closeModal({ key: 'createObject' }));
    },
  });
  return (
    <ModalLayout name="createObject" title="Создать новый объект">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <DropZone />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
          error={formik.errors.title}
          placeholder="Введите название"
          label="Название"
        />
        <Textarea
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.description}
          label="Описание"
          placeholder="Введите описание"
        />
        <Button disabled={Object.keys(formik.errors).length > 0}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateObjectModal;
