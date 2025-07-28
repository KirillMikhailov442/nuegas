import styles from './Employees.module.scss';
import EmoloyeeCard from '@/components/Cards/Employee/Employee';
import { NextPage } from 'next';

const EmployeesScreen: NextPage = () => {
  return (
    <div className={styles.content}>
      <EmoloyeeCard />
      <EmoloyeeCard />
      <EmoloyeeCard />
      <EmoloyeeCard />
      <EmoloyeeCard />
      <EmoloyeeCard />
    </div>
  );
};

export default EmployeesScreen;
