'use client';

import ModalLayout from '@components/Layouts/Modal';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@/store/slices/modals';
import Textarea from '../UI/Textarea/Textarea';
import Map from '../Map';
import useAppSelector from '@/hooks/useAppSelector';
import { useMediaQuery } from '@chakra-ui/react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useTaskGetOne, useTaskUpdate } from '@/hooks/useTasks';
import {
  convertCoordsInString,
  convertStringInCoords,
} from '@/helpers/convert';
import dayjs from 'dayjs';
import { useQueryClient } from 'react-query';
import { useParams } from 'next/navigation';

const EditTaskModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.modals.visibles.editTask);
  const taskId = useAppSelector(state => state.modals.params.editTask);
  const task = useTaskGetOne(taskId);
  const projectId = useParams<{ id: string }>().id;
  const query = useQueryClient();
  const update = useTaskUpdate(() => {
    query.invalidateQueries(['tasks', projectId]);
    formik.resetForm();
    dispatch(removeModalParam({ key: 'editTask' }));
    toast.success('Успешно создано');
    dispatch(closeModal({ key: 'editTask' }));
  });
  const formik = useFormik({
    initialValues: {
      title: task.data?.title,
      description: task.data?.description,
      deadline: task.data?.deadline,
      coords: convertStringInCoords(task.data?.cords as string),
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
      update.mutate({
        id: task.data?.id as string,
        title: values.title as string,
        description: values.description as string,
        deadline: new Date(values.deadline as string).toISOString(),
        cords: convertCoordsInString(values.coords as []),
      });
    },
  });
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  if (!task.isSuccess) return;

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => dispatch(closeModal({ key: 'editTask' }))}>
        <div className="p-8 flex flex-col gap-4 h-[80dvh]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
              type="date"
              name="deadline"
              label="Срок"
              // @ts-ignore
              value={dayjs(formik.values.deadline)}
              placeholder="Выберите срок"
              // @ts-ignore
              onChange={(_, dateString) =>
                formik.setFieldValue('deadline', dateString)
              }
            />
            <Textarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              value={formik.values.description}
              error={formik.errors.description}
              placeholder="Введите описание"
              label="Описание"
            />
            {/* @ts-ignore */}
            <Map
              defaultCords={
                convertStringInCoords(String(formik.values.coords)) as [
                  number,
                  number,
                ]
              }
              label="Координаты"
              onChange={coords => formik.setFieldValue('coords', coords)}
              error={formik.errors.coords as string}
            />
            <Button disabled={Object.keys(formik.errors).length > 0}>
              Создать
            </Button>
          </form>
        </div>
      </BottomSheet>
    );
  }
  return (
    <ModalLayout
      name="editTask"
      title="Изменить задачу"
      size="xl"
      handleClose={() => formik.resetForm()}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
          type="date"
          name="deadline"
          label="Срок"
          // @ts-ignore
          value={dayjs(formik.values.deadline)}
          placeholder="Выберите срок"
          // @ts-ignore
          onChange={(_, dateString) =>
            formik.setFieldValue('deadline', dateString)
          }
        />
        <Textarea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="description"
          value={formik.values.description}
          error={formik.errors.description}
          placeholder="Введите описание"
          label="Описание"
        />
        {/* @ts-ignore */}
        <Map
          label="Координаты"
          onChange={coords => formik.setFieldValue('coords', coords)}
          defaultCords={
            convertStringInCoords(String(formik.values.coords)) as [
              number,
              number,
            ]
          }
          error={formik.errors.coords as string}
        />
        <Button disabled={Object.keys(formik.errors).length > 0}>
          Изменить
        </Button>
      </form>
    </ModalLayout>
  );
};

export default EditTaskModal;
