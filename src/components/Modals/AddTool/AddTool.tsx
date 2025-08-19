'use client';

import { FC, useState } from 'react';
import ModalLayout from '../../Layouts/Modal';
import Item from './Item';
import styles from './AddTool.module.scss';
import Button from '@/components/UI/Button';
import { RadioGroup, useMediaQuery } from '@chakra-ui/react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal, removeModalParam } from '@/store/slices/modals';
import useAppSelector from '@/hooks/useAppSelector';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useToolAddToTask, useToolGetAll } from '@/hooks/useTool';
import { useQueryClient } from 'react-query';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

const AddToolModal: FC = () => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('');
  const employees = useToolGetAll({}, true);
  const [isTablet] = useMediaQuery('(max-width: 768px)');
  const query = useQueryClient();
  const taskId = useParams<{ id: string }>().id;
  const addToTask = useToolAddToTask(() => {
    query.invalidateQueries(['task', taskId]);
    query.invalidateQueries(['tools']);
    setSelected('');
    toast.success('Успешно добавлено');
    dispatch(removeModalParam({ key: 'addTool' }));
    dispatch(closeModal({ key: 'addTool' }));
  });
  const isOpen = useAppSelector(state => state.modals.visibles.addTool);

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          dispatch(closeModal({ key: 'addTool' }));
          setSelected('');
        }}>
        <div className="p-8 flex flex-col gap-4 h-[50dvh]">
          <ul className={styles.list}>
            <RadioGroup onChange={value => setSelected(value)} value={selected}>
              {employees.data?.data.pageItems.map(employee => (
                <Item {...employee} key={employee.id} />
              ))}
            </RadioGroup>
          </ul>
          <footer className="flex justify-between mt-6 gap-4">
            <Button
              className="basis-1/2"
              onClick={() => {
                dispatch(closeModal({ key: 'addTool' }));
                setSelected('');
              }}
              variant="secondary">
              Отмена
            </Button>
            <Button
              onClick={() => addToTask.mutate({ taskId, toolId: selected })}
              className="basis-1/2"
              disabled={!selected}>
              Добавить
            </Button>
          </footer>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      title="Добавить инструмент"
      name="addTool"
      handleClose={() => setSelected('')}>
      <ul className={styles.list}>
        <RadioGroup onChange={value => setSelected(value)} value={selected}>
          {employees.data?.data.pageItems.map(employee => (
            <Item {...employee} key={employee.id} />
          ))}
        </RadioGroup>
      </ul>
      <footer className="flex justify-between mt-6 gap-4">
        <Button
          className="basis-1/2"
          onClick={() => {
            dispatch(closeModal({ key: 'addTool' }));
            setSelected('');
          }}
          variant="secondary">
          Отмена
        </Button>
        <Button
          onClick={() => addToTask.mutate({ taskId, toolId: selected })}
          className="basis-1/2"
          disabled={!selected}>
          Добавить
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default AddToolModal;
