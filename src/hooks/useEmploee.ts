import { IEmployeesGet } from '@/types/Employee';
import { useQuery } from 'react-query';
import EmployeesService from '@services/Employees';

export const useEmployeesGetAll = (data: IEmployeesGet) => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => EmployeesService.getAll(data),
  });
};
