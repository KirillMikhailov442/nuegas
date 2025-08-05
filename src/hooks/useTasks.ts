import { useQuery } from 'react-query';
import TasksService from '@services/Tasks';
import { AxiosError } from 'axios';
import { ITasksGetAllResponse } from '@/types/Task';

export const useTasksGetAll = (
  id: string,
  onSuccess?: (data: ITasksGetAllResponse) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => TasksService.getAll(id),
    select: data => data.data,
    onSuccess,
    onError,
  });
};
