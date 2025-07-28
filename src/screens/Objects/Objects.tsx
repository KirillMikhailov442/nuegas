import styles from './Objects.module.scss';
import ObjectCard from '@/components/Cards/Object/Object';
import { NextPage } from 'next';

const ObjectsScreen: NextPage = () => {
  return (
    <div className={styles.content}>
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
    </div>
  );
};

export default ObjectsScreen;
