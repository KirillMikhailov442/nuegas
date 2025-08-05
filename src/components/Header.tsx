'use client';

import { useEffect, useState, type FC } from 'react';
import styles from './Header.module.scss';
import { Plus } from 'lucide-react';
import { Avatar } from '@chakra-ui/react';
import logo_img from '@images/logo.svg';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@UI/Button';
import { useProjectGetOne } from '@/hooks/useProject';
import { Typography } from 'antd';

const Header: FC = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const projectId = useParams<{ id: string }>().id;
  const project = useProjectGetOne(projectId, data =>
    setTitle(`Объект: ${data.title}`),
  );

  useEffect(() => {
    if (pathName == '/') {
      setTitle('Объекты');
    } else if (pathName.includes('/objects')) {
      project.refetch();
    } else if (pathName == '/tools') {
      setTitle('Инвентарь');
    } else if (pathName == '/employees') {
      setTitle('Персонал');
    }
  }, [pathName]);
  return (
    <header className="flex items-center justify-between bg-[var(--primary-0)] px-3 h-[70px] max-md:fixed max-md:w-full top-0 z-100">
      <Typography.Paragraph
        ellipsis
        className="hidden md:block !text-lg !mb-0 w-[60%]">
        {title}
      </Typography.Paragraph>
      <Link href={'/'} className="flex items-center gap-1 md:hidden">
        <Image src={logo_img} alt="logo" />
        <h4>Nuegas</h4>
      </Link>
      <div className="flex items-center gap-2 justify-between">
        {!projectId && !['/tasks', '/employees'].includes(pathName) && (
          <Button
            className="max-md:!hidden"
            onClick={() => {
              if (pathName == '/') {
                dispatch(openModal({ key: 'createObject' }));
              } else if (pathName.includes('/objects')) {
                dispatch(openModal({ key: 'createTask' }));
              } else if (pathName == '/employees') {
                dispatch(openModal({ key: 'createEmployee' }));
              } else if (pathName == '/tools') {
                dispatch(openModal({ key: 'createTool' }));
              }
            }}>
            <Plus size={20} /> Создать
          </Button>
        )}
        <Avatar className={'w-[50px] h-[50px]'} name="fake" />
      </div>
    </header>
  );
};

export default Header;
