'use client';

import ModalLayout from '@components/Layouts/Modal';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import Textarea from '../UI/Textarea/Textarea';
import Map from '../Map';
import useAppSelector from '@/hooks/useAppSelector';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useMediaQuery } from '@chakra-ui/react';
import { useTaskCreate } from '@/hooks/useTasks';
import { useParams } from 'next/navigation';
import { convertCoordsInString } from '@/helpers/convert';
import { toast } from 'sonner';
import { useQueryClient } from 'react-query';

const CreateTaskModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.modals.visibles.createTask);
  const projectId = useParams<{ id: string }>().id;
  const query = useQueryClient();
  const create = useTaskCreate(() => {
    formik.resetForm();
    query.invalidateQueries(['tasks', projectId]);
    toast.success('Успешно создано');
    dispatch(closeModal({ key: 'createTask' }));
  });
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      deadline: '',
      coords: [],
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      title: Yup.string().trim().required('Введите название'),
      description: Yup.string().trim().required('Введите описание'),
      deadline: Yup.string().trim().required('Выберите дату срока'),
      coords: Yup.array().length(2, 'Выберите координаты'),
    }),
    onSubmit: values => {
      create.mutate({
        projectdId: projectId,
        title: values.title,
        description: values.description,
        deadline: new Date(values.deadline).toISOString(),
        cords: convertCoordsInString(values.coords),
      });
    },
  });

  const [isTablet] = useMediaQuery('(max-width: 768px)');

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          formik.resetForm();
          dispatch(closeModal({ key: 'createTask' }));
        }}>
        <div className="p-8 flex flex-col gap-4 h-[80dvh]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="title"
              error={formik.errors.title}
              placeholder="Введите название"
              label="Название"
            />
            <Input
              type="date"
              name="deadline"
              label="Срок"
              placeholder="Выберите срок"
              onChange={(_, dateString) =>
                formik.setFieldValue('deadline', dateString)
              }
            />
            <Textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              error={formik.errors.description}
              placeholder="Введите описание"
              label="Описание"
            />
            <Map
              label="Координаты"
              onChange={coords => formik.setFieldValue('coords', coords)}
              error={formik.errors.coords}
            />
            <Button
              disabled={
                Object.keys(formik.errors).length > 0 || create.isLoading
              }
              isLoading={create.isLoading}>
              Создать
            </Button>
          </form>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      size="xl"
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
        <Input
          type="date"
          name="deadline"
          label="Срок"
          placeholder="Выберите дату срок"
          error={formik.errors.deadline}
          onChange={(_, dateString) => {
            formik.setFieldValue('deadline', dateString);
          }}
        />
        <Textarea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="description"
          error={formik.errors.description}
          placeholder="Введите описание"
          label="Описание"
        />
        <Map
          label="Координаты"
          onChange={coords => formik.setFieldValue('coords', coords)}
          error={formik.errors.coords}
        />
        <Button
          disabled={Object.keys(formik.errors).length > 0 || create.isLoading}
          isLoading={create.isLoading}>
          Создать
        </Button>
      </form>
    </ModalLayout>
  );
};

export default CreateTaskModal;
