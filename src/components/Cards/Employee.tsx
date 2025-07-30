'use client';

import type { FC } from 'react';
import { Avatar } from '@chakra-ui/react';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { Dropdown, type MenuProps } from 'antd';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import Link from 'next/link';

const EmoloyeeCard: FC = () => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
      onClick: () => dispatch(openModal({ key: 'editEmployee' })),
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      danger: true,
      onClick: () => dispatch(openModal({ key: 'deleteEmployee' })),
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <li className="p-4 rounded-lg relative bg-[var(--primary-0)] border border-solid border-[var(--primary-200)]">
        <Dropdown menu={{ items }} trigger={['click']}>
          <button className="absolute top-6 right-6  text-[var(--secondary-500)] p-2">
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
        <div className="flex items-center gap-2">
          <Avatar name="Fake" />
          <h6 className="font-semibold">Антон Антонович</h6>
        </div>
        <Link
          href={'/'}
          className="mt-2 !text-[var(--primary-500)] text-lg float-left">
          12 Задача
        </Link>
      </li>
    </Dropdown>
  );
};

export default EmoloyeeCard;
