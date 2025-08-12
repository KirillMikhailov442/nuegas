'use client';

import type { FC } from 'react';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { Dropdown, type MenuProps } from 'antd';
import useAppDispatch from '@hooks/useAppDispatch';
import { openModal, setModalParam } from '@/store/slices/modals';
import { ITool } from '@/types/Tool';

const ToolCard: FC<ITool> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <Pencil size={20} />,
      label: 'Редактировать',
      onClick: () => {
        dispatch(setModalParam({ key: 'editTool', value: id }));
        dispatch(openModal({ key: 'editTool' }));
      },
    },
    {
      key: '2',
      icon: <Trash size={20} />,
      label: 'Удалить',
      danger: true,
      onClick: () => {
        dispatch(setModalParam({ key: 'deleteTool', value: id }));
        dispatch(openModal({ key: 'deleteTool' }));
      },
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <li className="c-border flex justify-between items-center p-4 rounded-lg bg-[var(--primary-0)]">
        <h6 className="!font-semibold">{name}</h6>
        <Dropdown menu={{ items }} trigger={['click']}>
          <button className="text-[var(--secondary-500)]">
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
        {/* <Link href={'/'} className="mt-6 !text-[var(--primary-500)] float-left">
          12 Задача
        </Link> */}
      </li>
    </Dropdown>
  );
};

export default ToolCard;
