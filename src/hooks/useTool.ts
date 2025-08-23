import {
  ITool,
  IToolAdd,
  IToolsGet,
  IToolToTask,
  IToolUpdate,
} from '@/types/Tool';
import ToolService from '@services/Tools';
import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';

export const useToolGetAll = (data: IToolsGet) => {
  return useQuery({
    queryKey: ['tools'],
    queryFn: () => ToolService.getAll(data),
  });
};

export const useToolGetAllWithEnabled = (data: IToolsGet) => {
  return useQuery({
    queryKey: ['tools-enabled'],
    queryFn: () => ToolService.getAll(data),
    enabled: false,
  });
};

export const useToolGetOne = (
  id: string,
  onSuccess?: (data: ITool) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['tool', id],
    queryFn: () => ToolService.getOne(id),
    enabled: !!id,
    select: data => data.data,
    onSuccess,
    onError,
  });
};

export const useToolCreate = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['tool-update'],
    mutationFn: (data: IToolAdd) => ToolService.create(data),
    onSuccess,
    onError,
  });
};

export const useToolUpdate = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['tool-update'],
    mutationFn: (data: IToolUpdate) => ToolService.update(data),
    onSuccess,
    onError,
  });
};

export const useToolDelete = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['tool-delete'],
    mutationFn: (id: string) => ToolService.delete(id),
    onSuccess,
    onError,
  });
};

export const useToolAddToTask = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['add-to-task'],
    mutationFn: (body: IToolToTask) => ToolService.addToTask(body),
    onSuccess,
    onError,
  });
};

export const useToolRemoveFromTask = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['remove-from-task'],
    mutationFn: (body: IToolToTask) => ToolService.removeFromTask(body),
    onSuccess,
    onError,
  });
};
