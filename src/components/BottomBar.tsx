import type { FC } from 'react';
import { DoorOpen, Folders, Hammer, Plus, Users } from 'lucide-react';
import clsx from 'clsx';
import useAppDispatch from '@hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const BottomBar: FC = () => {
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const navigate = useRouter();

  const { id } = useParams<{ id: string }>();
  return (
    <nav className="c-t-border hidden max-md:flex justify-center items-center gap-6 fixed bottom-0 w-full bg-[var(--primary-0)] h-[var(--bottom-bar-height)]">
      <Link
        className={clsx(
          'flex items-center gap-1 flex-col !text-[var(--secondary-300)]',
          (pathName.startsWith('/objects') || pathName == '/') &&
            '!text-[var(--secondary-500)]',
        )}
        href={'/'}>
        <Folders size={30} />
      </Link>
      <Link
        className={clsx(
          'flex items-center gap-1 flex-col !text-[var(--secondary-300)]',
          pathName.startsWith('/employees') && '!text-[var(--secondary-500)]',
        )}
        href={'/employees'}>
        <Users size={30} />
      </Link>
      {!['/tasks', '/employees'].includes(pathName) &&
        !pathName.startsWith('/tasks') && (
          <button
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
            }}
            className="rounded-full relative w-[70px] h-[70px] bottom-[50%] !bg-[var(--primary-500)] !text-[var(--primary-0)] flex items-center justify-center">
            <Plus size={30} />
          </button>
        )}
      <Link
        className={clsx(
          'flex items-center gap-1 flex-col !text-[var(--secondary-300)]',
          pathName.startsWith('/tools') && '!text-[var(--secondary-500)]',
        )}
        href={'/tools'}>
        <Hammer size={30} />
      </Link>
      <div
        role="button"
        onClick={() => navigate.replace('/signin')}
        className={
          'flex items-center gap-1 flex-col text-[var(--secondary-300)]'
        }>
        <DoorOpen size={30} />
      </div>
    </nav>
  );
};

export default BottomBar;
