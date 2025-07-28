'use client'

import ModalLayout from '@/components/Layouts/Modal/Modal';
import Button from '@/components/UI/Button';
import styles from './CreateEmployee.module.scss';
import Input from '@/components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';

const CreateEmployeeModal = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      firstName: Yup.string().trim().required('Введите имя'),
      lastName: Yup.string().trim().required('Введите фамилию'),
    }),
    onSubmit: () => {
      toast.success('Успешно создано');
      dispatch(closeModal({ key: 'createEmployee' }));
    },
  });
  return (
    <ModalLayout
      name="createEmployee"
      title="Создать нового рабочего">
      <form
        onSubmit={formik.handleSubmit}
        className={styles.form}>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="firstName"
          error={formik.errors.firstName}
          placeholder="Введите имя"
          label="Имя"
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="lastName"
          error={formik.errors.lastName}
          placeholder="Введите фамилию"
          label="Фамилия"
        />
        <Button disabled={Object.keys(formik.errors).length > 0}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateEmployeeModal;
