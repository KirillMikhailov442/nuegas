'use client';

import EmoloyeeCard from '@components/Cards/Employee';
import { useEmployeesGetAll } from '@hooks/useEmploee';
import { NextPage } from 'next';

const EmployeesScreen: NextPage = () => {
  const employees = useEmployeesGetAll({});
  console.log(employees);

  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
      {employees.data?.data.pageItems.map(employee => (
        <EmoloyeeCard key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export default EmployeesScreen;
