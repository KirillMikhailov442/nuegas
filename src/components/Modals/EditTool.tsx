'use client';

import ModalLayout from '@/components/Layouts/Modal';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import useAppSelector from '@/hooks/useAppSelector';

const EditToolModal = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.modals.params.editTool);
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      title: Yup.string().trim().required('Введите название'),
    }),
    onSubmit: () => {
      toast.success('Успешно изменено');
      dispatch(closeModal({ key: 'createTool' }));
    },
  });
  return (
    <ModalLayout name="editTool" title="Изменить инструмент">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          error={formik.errors.name}
          placeholder="Введите название"
          label="Название"
        />
        <Button disabled={Object.keys(formik.errors).length > 0}>
          Изменить
        </Button>
      </form>
    </ModalLayout>
  );
};

export default EditToolModal;
