'use client';

import ModalLayout from '@components/Layouts/Modal';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import Textarea from '@UI/Textarea/Textarea';
import DropZone from '../DropZone/Images';
import { useProjectCreate } from '@/hooks/useProject';
import { useQueryClient } from 'react-query';
import { useMediaQuery } from '@chakra-ui/react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import useAppSelector from '@/hooks/useAppSelector';

const CreateObjectModal = () => {
  const dispatch = useAppDispatch();
  const query = useQueryClient();
  const isOpen = useAppSelector(state => state.modals.visibles.createObject);
  const createObject = useProjectCreate(() => {
    toast.success('Успешно создано');
    formik.resetForm();
    query.invalidateQueries(['projects']);
    dispatch(closeModal({ key: 'createObject' }));
  });
  const formik = useFormik({
    initialValues: {
      img: '',
      title: '',
      description: '',
      customer: '',
      company: '',
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      img: Yup.mixed().required('Выберите изображение'),
      title: Yup.string().trim().required('Введите название'),
      description: Yup.string().trim().required('Введите описание'),
      customer: Yup.string().trim().required('Введите заказчика'),
      company: Yup.string().trim().required('Введите компанию'),
    }),
    onSubmit: values => {
      createObject.mutate(values);
    },
  });
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          formik.resetForm();
          dispatch(closeModal({ key: 'createObject' }));
        }}>
        <div className="p-8 flex flex-col gap-4 h-[80dvh]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <DropZone
              onChange={file => formik.setFieldValue('img', file)}
              onClose={() => formik.setFieldValue('img', '')}
              value={formik.values.img}
              error={formik.errors.img}
            />
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="title"
              error={formik.errors.title}
              placeholder="Введите название"
              label="Название"
            />
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="customer"
              error={formik.errors.customer}
              placeholder="Введите заказчика"
              label="Заказчик"
            />
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="company"
              error={formik.errors.company}
              placeholder="Введите компания"
              label="Компания"
            />
            <Textarea
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.description}
              label="Описание"
              placeholder="Введите описание"
            />
            <Button
              disabled={
                Object.keys(formik.errors).length > 0 || createObject.isLoading
              }
              isLoading={createObject.isLoading}>
              Создать
            </Button>
          </form>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      name="createObject"
      title="Создать новый объект"
      size="xl"
      handleClose={() => formik.resetForm()}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <DropZone
          onChange={file => formik.setFieldValue('img', file)}
          onClose={() => formik.setFieldValue('img', '')}
          value={formik.values.img}
          error={formik.errors.img}
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
          error={formik.errors.title}
          placeholder="Введите название"
          label="Название"
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="customer"
          error={formik.errors.customer}
          placeholder="Введите заказчика"
          label="Заказчик"
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="company"
          error={formik.errors.company}
          placeholder="Введите компания"
          label="Компания"
        />
        <Textarea
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.description}
          label="Описание"
          placeholder="Введите описание"
        />
        <Button
          disabled={
            Object.keys(formik.errors).length > 0 || createObject.isLoading
          }
          isLoading={createObject.isLoading}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateObjectModal;
