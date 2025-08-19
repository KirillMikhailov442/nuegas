'use client';

import { FC, useState } from 'react';
import ModalLayout from '../../Layouts/Modal';
import Item from './Item';
import styles from './AddEmployee.module.scss';
import Button from '@/components/UI/Button';
import { useEmployeeAddToTask, useEmployeesGetAll } from '@/hooks/useEmploee';
import { RadioGroup, useMediaQuery } from '@chakra-ui/react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal } from '@/store/slices/modals';
import useAppSelector from '@/hooks/useAppSelector';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import { useQueryClient } from 'react-query';

const AddEmployeeModal: FC = () => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('');
  const employees = useEmployeesGetAll({});
  const query = useQueryClient();
  const [isTablet] = useMediaQuery('(max-width: 768px)');
  const isOpen = useAppSelector(state => state.modals.visibles.addEmployee);
  const taskId = useParams<{ id: string }>().id;
  const addToTask = useEmployeeAddToTask(() => {
    query.invalidateQueries(['task', taskId]);
    toast.success('Успешно добавлен');
    dispatch(closeModal({ key: 'addEmployee' }));
    setSelected('');
  });

  if (isTablet) {
    return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => {
          dispatch(closeModal({ key: 'addEmployee' }));
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
                setSelected('');
                dispatch(closeModal({ key: 'addEmployee' }));
              }}
              variant="secondary">
              Отмена
            </Button>
            <Button
              onClick={() => addToTask.mutate({ taskId, employeeId: selected })}
              className="basis-1/2"
              disabled={!selected || addToTask.isLoading}
              isLoading={addToTask.isLoading}>
              Добавить
            </Button>
          </footer>
        </div>
      </BottomSheet>
    );
  }

  return (
    <ModalLayout
      title="Добавить сотрудника"
      name="addEmployee"
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
            setSelected('');
            dispatch(closeModal({ key: 'addEmployee' }));
          }}
          variant="secondary">
          Отмена
        </Button>
        <Button
          onClick={() => addToTask.mutate({ taskId, employeeId: selected })}
          className="basis-1/2"
          disabled={!selected || addToTask.isLoading}
          isLoading={addToTask.isLoading}>
          Добавить
        </Button>
      </footer>
    </ModalLayout>
  );
};

export default AddEmployeeModal;
