'use client';

import ModalLayout from '@layouts/Modal';
import Button from '@UI/Button';
import Input from '@UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@store/slices/modals';
import Textarea from '@UI/Textarea/Textarea';
import DropZone from '@components/DropZone/Images';
import { useProjectGetOne, useProjectUpdate } from '@hooks/useProject';
import useAppSelector from '@hooks/useAppSelector';
import { useQueryClient } from 'react-query';
import { useMediaQuery } from '@chakra-ui/react';
import { BottomSheet } from 'react-spring-bottom-sheet';

const EditObjectModal = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.modals.params.editObject);
  const project = useProjectGetOne(id);
  const isOpen = useAppSelector(state => state.modals.visibles.editObject);
  const query = useQueryClient();
  const updateProject = useProjectUpdate(() => {
    formik.resetForm();
    query.invalidateQueries(['projects']);
    toast.success('Успешно создано');
    dispatch(closeModal({ key: 'editObject' }));
  });

  const formik = useFormik({
    initialValues: {
      img: project.data?.img,
      title: project.data?.title,
      description: project.data?.description,
      customer: project.data?.customer,
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      img: Yup.mixed().required('Выберите изображение'),
      title: Yup.string().trim().required('Введите название'),
      description: Yup.string().trim().required('Введите описание'),
      customer: Yup.string().trim().required('Введите заказчика'),
    }),
    onSubmit: values => {
      console.log(values);

      updateProject.mutate({
        id: id,
        title: String(values.title),
        description: String(values.description),
        customer: String(values.customer),
        img: values.img,
      });
    },
  });

  const [isTablet] = useMediaQuery('(max-width: 768px)');
  if (!project.isSuccess) return;

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          formik.resetForm();
          dispatch(closeModal({ key: 'editObject' }));
        }}>
        <div className="p-8 flex flex-col gap-4 h-[80dvh]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <DropZone
              onChange={file => formik.setFieldValue('img', file)}
              value={formik.values.img}
            />
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="title"
              value={formik.values.title}
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
            <Textarea
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.description}
              value={formik.values.description}
              label="Описание"
              rows={4}
              placeholder="Введите описание"
            />
            <Button
              disabled={
                Object.keys(formik.errors).length > 0 || updateProject.isLoading
              }
              isLoading={updateProject.isLoading}>
              Изменить
            </Button>
          </form>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      name="editObject"
      title="Изменить объект"
      size="xl"
      handleClose={() => {
        formik.resetForm();
        dispatch(removeModalParam({ key: 'editObject' }));
      }}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <DropZone
          onChange={file => formik.setFieldValue('img', file)}
          value={formik.values.img}
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
          value={formik.values.title}
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
        <Textarea
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.description}
          value={formik.values.description}
          label="Описание"
          rows={4}
          placeholder="Введите описание"
        />
        <Button
          disabled={
            Object.keys(formik.errors).length > 0 || updateProject.isLoading
          }
          isLoading={updateProject.isLoading}>
          Изменить
        </Button>
      </form>
    </ModalLayout>
  );
};

export default EditObjectModal;
