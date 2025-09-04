'use client';

import task_img from '@images/project.jpg';
import { Calendar, Plus } from 'lucide-react';
import { Avatar, AvatarGroup, Skeleton } from '@chakra-ui/react';
import EmployeeItem from './components/Employee';
import ToolItem from './components/Tool';
import { NextPage } from 'next';
import Image from 'next/image';
import { useTaskGetOne } from '@/hooks/useTasks';
import { useParams } from 'next/navigation';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Microtask from './components/Microtask';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';

const SingleTaskScreen: NextPage = () => {
  const { id } = useParams<{ id: string }>();
  const task = useTaskGetOne(id);
  const dispatch = useAppDispatch();

  if (task.isLoading) {
    return <Skeleton height={500} />;
  }
  return (
    <div className="flex justify-center items-start gap-6 m-6 max-lg:block max-sm:m-3">
      <div className="basis-[820px] c-border bg-[var(--primary-0)] overflow-hidden rounded-md max-lg:mb-5">
        <Image
          className="min-h-[250px] w-full object-cover object-center"
          src={task_img}
          alt="task image"
        />
        <div className="p-6">
          <h3 className="!mb-2">{task.data?.title}</h3>
          <div className="flex items-center gap-4 mb-10">
            <p className="flex items-center gap-1.5">
              <Calendar size={20} />{' '}
              {dayjs(task.data?.deadline).locale('ru').format('DD MMMM YYYY')}
            </p>
            {/* @ts-ignore */}
            {task.data?.employees.length > 0 && (
              <div className="flex items-center gap-1.5">
                <span>Персонал:</span>
                <AvatarGroup size={'sm'} max={3}>
                  {task.data?.employees.map(employee => (
                    <Avatar
                      key={employee.id}
                      name={employee.name + employee.surname}
                      src={employee.img}
                    />
                  ))}
                </AvatarGroup>
              </div>
            )}
          </div>
          <div className="mb-6">
            <h4 className="mb-4">Описание</h4>
            <p>{task.data?.description}</p>
          </div>
          <div className="mb-6">
            <h4 className="mb-4">Микрозадачи</h4>
            <ul>
              {task.data?.microtasks.map(microtask => (
                <Microtask {...microtask} key={microtask.id} />
              ))}
              <button
                onClick={() => dispatch(openModal({ key: 'createMicrotask' }))}
                className="!mt-3 !ml-5 !text-[var(--primary-700)] flex items-center gap-1">
                <Plus size={15} />
                Добавить
              </button>
            </ul>
          </div>
        </div>
      </div>
      <aside className="basis-[320px] c-border bg-[var(--primary-0)] p-6 rounded-md">
        <div className="mb-6">
          <h4 className="mb-4">Персонал</h4>
          <ul className="max-h-[300px]">
            {task.data?.employees.map(employee => (
              <EmployeeItem key={employee.id} {...employee} />
            ))}
            <li>
              <button
                onClick={() => dispatch(openModal({ key: 'addEmployee' }))}
                className="!mt-3 !ml-5 !text-[var(--primary-700)] flex items-center gap-1">
                <Plus size={15} />
                Добавить
              </button>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="mb-4">Инвентарь</h4>
          <ul className="max-h-[300px]">
            {task.data?.tools.map(tool => (
              <ToolItem key={tool.id} {...tool} />
            ))}
          </ul>
          <li>
            <button
              onClick={() => dispatch(openModal({ key: 'addTool' }))}
              className="!mt-3 !ml-5 !text-[var(--primary-700)] flex items-center gap-1">
              <Plus size={15} />
              Добавить
            </button>
          </li>
        </div>
      </aside>
    </div>
  );
};

export default SingleTaskScreen;
