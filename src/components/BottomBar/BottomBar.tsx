import type { FC } from 'react';
import styles from './BottomBar.module.scss';
import { DoorOpen, Folders, Hammer, Plus, Users } from 'lucide-react';
import clsx from 'clsx';
import Button from '@UI/Button';
import useAppDispatch from '@/hooks/useAppDispatch';
import { openModal } from '@/store/slices/modals';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const BottomBar: FC = () => {
  const dispatch = useAppDispatch();
  const pathName = usePathname()
  const navigate = useRouter()
  const { id } = useParams<{ id: string }>();
  return (
    <nav className={styles.nav}>
      <Link
        className={clsx(
          styles.item,
          (pathName.includes('/objects') || pathName == '/') && styles.active,
        )}
        href={'/'}>
        <Folders size={30} />
      </Link>
      <Link
        className={clsx(styles.item, pathName == '/employees' && styles.active)}
        href={'/employees'}>
        <Users size={30} />
      </Link>
      {(!id || !pathName.includes('/tasks')) && (
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
          className={styles.center}>
          <Plus size={30} />
        </button>
      )}
      <Link
        className={clsx(styles.item, pathName == '/tools' && styles.active)}
        href={'/tools'}>
        <Hammer size={30} />
      </Link>
      <div
        role="button"
        onClick={() => navigate.replace('/signin')}
        className={clsx(styles.item)}>
        <DoorOpen size={30} />
      </div>
    </nav>
  );
};

export default BottomBar;
