'use client'

import type { FC } from 'react';
import styles from './Tool.module.scss';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { Dropdown, type MenuProps } from 'antd';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import Link from 'next/link';

const ToolCard: FC = () => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
      onClick: () => dispatch(openModal({ key: 'editTool' })),
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      danger: true,
      onClick: () => dispatch(openModal({ key: 'deleteTool' })),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      trigger={['contextMenu']}>
      <li className={styles.card}>
        <Dropdown
          menu={{ items }}
          trigger={['click']}>
          <button className={styles.menu}>
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
        <div className={styles.up}>
          <h6 className={styles.fullName}>Лестница</h6>
        </div>
        <Link
          href={'/'}
          className={styles.down}>
          12 Задача
        </Link>
      </li>
    </Dropdown>
  );
};

export default ToolCard;
