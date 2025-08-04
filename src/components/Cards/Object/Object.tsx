'use client';

import type { FC } from 'react';
import styles from './Object.module.scss';
import { Avatar, AvatarGroup, Progress } from '@chakra-ui/react';
import { Pencil, Trash } from 'lucide-react';
import { Dropdown, Typography, type MenuProps } from 'antd';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal, setModalParam } from '@/store/slices/modals';
import Link from 'next/link';
import Image from 'next/image';
import { IProject } from '@/types/Project';

const ObjectCard: FC<IProject> = ({ id, title, img, customer }) => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
      onClick: () => {
        dispatch(setModalParam({ key: 'editObject', value: id }));
        dispatch(openModal({ key: 'editObject' }));
      },
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      onClick: () => {
        dispatch(setModalParam({ key: 'deleteObject', value: id }));
        dispatch(openModal({ key: 'deleteObject' }));
      },
      danger: true,
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <li>
        <Link href={`/objects/${id}`} className={styles.card}>
          <Image
            className={styles.img}
            src={img}
            width={200}
            height={50}
            loading="lazy"
            alt="Проект заголовок"
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
                <p className={styles.number}>100%</p>
              </div>
              <Progress
                className={styles.progress}
                color="primary-500"
                value={90}
              />
            </div>
            <footer className={styles.down}>
              <Typography.Paragraph ellipsis className={styles.customer}>
                {customer}
              </Typography.Paragraph>
              <AvatarGroup max={3} size={'xs'}>
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

export default ObjectCard;
