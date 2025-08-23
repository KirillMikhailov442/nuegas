import type { FC } from 'react';
import styles from './Task.module.scss';
import project_img from '@images/project.jpg';
import { Avatar, AvatarGroup, Progress } from '@chakra-ui/react';
import { Pencil, Trash } from 'lucide-react';
import { Dropdown, Typography, type MenuProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { ITask } from '@/types/Task';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import useAppDispatch from '@hooks/useAppDispatch';
import { openModal, setModalParam } from '@store/slices/modals';

const TaskCard: FC<ITask> = ({ title, id, deadline, employees, progress }) => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
      onClick: () => {
        dispatch(setModalParam({ key: 'editTask', value: id }));
        dispatch(openModal({ key: 'editTask' }));
      },
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      danger: true,
      onClick: () => {
        dispatch(setModalParam({ key: 'deleteTask', value: id }));
        dispatch(openModal({ key: 'deleteTask' }));
      },
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <li>
        <Link href={`/tasks/${id}`} className={styles.card}>
          <Image
            className={styles.img}
            src={project_img}
            loading="lazy"
            alt={title}
          />
          <footer className={styles.footer}>
            <Typography.Paragraph
              className={styles.title}
              ellipsis={{ rows: 2 }}>
              {title}
            </Typography.Paragraph>
            <div className={styles.progressbar}>
              <div>
                <h6>Прогресс</h6>
                <p className={styles.number}>{progress}%</p>
              </div>
              <Progress
                className={styles.progress}
                color="primary-500"
                value={progress}
                max={100}
              />
            </div>
            <footer className={styles.down}>
              <p className={styles.date}>
                Сроки: {dayjs(deadline).locale('ru').format('DD MMM YYYY')}
              </p>
              <AvatarGroup max={3} size={'xs'}>
                {employees.map(employee => (
                  <Avatar key={employee.id} name={employee.name} />
                ))}
              </AvatarGroup>
            </footer>
          </footer>
        </Link>
      </li>
    </Dropdown>
  );
};

export default TaskCard;
