import type { FC } from 'react';
import styles from './Task.module.scss';
import project_img from '@images/project.jpg';
import { Avatar, AvatarGroup, Progress } from '@chakra-ui/react';
import { Calendar, Pencil, Trash } from 'lucide-react';
import { Dropdown, type MenuProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const TaskCard: FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      danger: true,
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      trigger={['contextMenu']}>
      <li>
        <Link
          href={'/tasks/1'}
          className={styles.card}>
          <Image
            className={styles.img}
            src={project_img}
            loading="lazy"
            alt="Проект заголовок"
          />
          <footer className={styles.footer}>
            <p className={styles.title}>Моя задача</p>
            <div className={styles.progressbar}>
              <div>
                <h6>Прогресс</h6>
                <p className={styles.number}>100%</p>
              </div>
              <Progress
                className={styles.progress}
                color="primary-500"
                value={90}
              />
            </div>
            <footer className={styles.down}>
              <p className={styles.date}>
                <Calendar size={20} /> <span>12 Апреля 2023</span>
              </p>
              <AvatarGroup
                max={3}
                size={'xs'}>
                <Avatar name="a" />
                <Avatar name="bss" />
                <Avatar name="caa" />
                <Avatar name="dcc" />
              </AvatarGroup>
            </footer>
          </footer>
        </Link>
      </li>
    </Dropdown>
  );
};

export default TaskCard;
