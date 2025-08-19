import { IEmployeesGet, IEmployeeToTask } from '@/types/Employee';
import { useMutation, useQuery } from 'react-query';
import EmployeesService from '@services/Employees';
import { AxiosError } from 'axios';

export const useEmployeesGetAll = (data: IEmployeesGet) => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => EmployeesService.getAll(data),
  });
};

export const useEmployeeAddToTask = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['add-to-task'],
    mutationFn: (body: IEmployeeToTask) => EmployeesService.addToTask(body),
    onSuccess,
    onError,
  });
};

export const useEmployeeRemoveFromTask = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['remove-from-task'],
    mutationFn: (body: IEmployeeToTask) =>
      EmployeesService.removeFromTask(body),
    onSuccess,
    onError,
  });
};
