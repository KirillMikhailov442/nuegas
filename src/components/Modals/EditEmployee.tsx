'use client';

import ModalLayout from '@/components/Layouts/Modal';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';

const EditEmployeeModal = () => {
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
      toast.success('Успешно изменено');
      dispatch(closeModal({ key: 'editEmployee' }));
    },
  });
  return (
    <ModalLayout name="editEmployee" title="Изменить рабочего">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
          Изменить
        </Button>
      </form>
    </ModalLayout>
  );
};

export default EditEmployeeModal;
