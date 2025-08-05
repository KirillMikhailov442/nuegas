import { IToolAdd, IToolsGet, IToolUpdate } from '@/types/Tool';
import ToolService from '@/services/Tools';
import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';

export const useToolGetAll = (data: IToolsGet) => {
  return useQuery({
    queryKey: ['tools'],
    queryFn: () => ToolService.getAll(data),
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
