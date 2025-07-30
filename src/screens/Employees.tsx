import EmoloyeeCard from '@/components/Cards/Employee';
import { NextPage } from 'next';

const EmployeesScreen: NextPage = () => {
  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
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
