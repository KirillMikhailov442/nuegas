import { useMutation, useQuery } from 'react-query';
import TasksService from '@services/Tasks';
import { AxiosError } from 'axios';
import { ITask, ITaskCreate, ITaskUpdate } from '@/types/Task';

export const useTasksGetAll = (
  id: string,
  onSuccess?: (data: ITask[]) => void,
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

export const useTasksGetAllWithEnabled = (
  id: string,
  onSuccess?: (data: ITask[]) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['tasks-enabled', id],
    queryFn: () => TasksService.getAll(id),
    select: data => data.data,
    enabled: false,
    onSuccess,
    onError,
  });
};

export const useTaskGetOne = (
  id: string,
  onSuccess?: (data: ITask) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['task', id],
    queryFn: () => TasksService.getOne(id),
    select: data => data.data,
    enabled: !!id,
    onSuccess,
    onError,
  });
};

export const useTaskCreate = (
  onSuccess?: (data: ITask) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['task-create'],
    mutationFn: (body: ITaskCreate) => TasksService.create(body),
    onSuccess,
    onError,
  });
};

export const useTaskUpdate = (
  onSuccess?: (data: ITask) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['task-update'],
    mutationFn: (body: ITaskUpdate) => TasksService.update(body),
    onSuccess,
    onError,
  });
};

export const useTaskDelete = (
  onSuccess?: (data: ITask) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['task-delete'],
    mutationFn: (id: string) => TasksService.delete(id),
    onSuccess,
    onError,
  });
};
