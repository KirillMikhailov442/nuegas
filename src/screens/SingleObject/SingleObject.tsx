import styles from './SingleObject.module.scss';
import TaskCard from '@/components/Cards/Task/Task';
import { NextPage } from 'next';

const SingleObjectScreen: NextPage = () => {
  return (
    <div className={styles.content}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default SingleObjectScreen;
