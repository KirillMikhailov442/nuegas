'use client'

import ModalLayout from '@/components/Layouts/Modal/Modal';
import Button from '@/components/UI/Button';
import styles from './CreateObject.module.scss';
import Input from '@/components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';

const CreateObjectModal = () => {
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
    onSubmit: () => {
      toast.success('Успешно создано');
      dispatch(closeModal({ key: 'createObject' }));
    },
  });
  return (
    <ModalLayout
      name="createObject"
      title="Создать новый объект">
      <form
        onSubmit={formik.handleSubmit}
        className={styles.form}>
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

export default CreateObjectModal;
