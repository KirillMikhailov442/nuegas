'use client';

import ModalLayout from '@components/Layouts/Modal';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@store/slices/modals';
import useAppSelector from '@hooks/useAppSelector';
import { useToolGetOne } from '@hooks/useTool';
import { useMediaQuery } from '@chakra-ui/react';
import { BottomSheet } from 'react-spring-bottom-sheet';

const EditToolModal = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.modals.params.editTool);
  const isOpen = useAppSelector(state => state.modals.visibles.editTool);
  const tool = useToolGetOne(id);
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  const formik = useFormik({
    initialValues: {
      name: tool.data?.name,
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      name: Yup.string().trim().required('Введите название'),
    }),
    onSubmit: (_, { resetForm }) => {
      resetForm();
      dispatch(removeModalParam({ key: 'editTool' }));
      dispatch(closeModal({ key: 'editTool' }));
    },
  });

  if (!tool.data) return;

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          dispatch(removeModalParam({ key: 'editTool' }));
          dispatch(closeModal({ key: 'editTool' }));
        }}>
        <div className="p-8 flex flex-col gap-4 h-[30dvh]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <Input
              onChange={formik.handleChange}
              value={formik.values.name}
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
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      name="editTool"
      title="Изменить инструмент"
      handleClose={() => {
        formik.resetForm();
        dispatch(closeModal({ key: 'editTool' }));
      }}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <Input
          onChange={formik.handleChange}
          value={formik.values.name}
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
