'use client';

import type { FC } from 'react';
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
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <li className="p-4 rounded-lg relative bg-[var(--primary-0)]">
        <Dropdown menu={{ items }} trigger={['click']}>
          <button className="absolute top-3 right-3 text-[var(--secondary-500)] p-2">
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
        <div className="gap-2">
          <h6 className="!font-semibold">Лестница</h6>
        </div>
        <Link href={'/'} className="mt-6 !text-[var(--primary-500)] float-left">
          12 Задача
        </Link>
      </li>
    </Dropdown>
  );
};

export default ToolCard;
