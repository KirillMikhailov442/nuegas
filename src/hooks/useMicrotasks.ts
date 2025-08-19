import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import MicrotasksService from '@services/Microtasks';
import { IMicrotaskAdd, IMicrotaskUpdate } from '@/types/Microtask';

export const useMicrotaskGetOne = (
  id: string,
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['microtask', id],
    queryFn: () => MicrotasksService.getOne(id),
    select: data => data.data,
    onSuccess,
    onError,
  });
};

export const useMicrotaskGetOneWithEnabled = (
  id: string,
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['microtask', id],
    queryFn: () => MicrotasksService.getOne(id),
    enabled: false,
    select: data => data.data,
    onSuccess,
    onError,
  });
};

export const useMicrotasksCreate = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['microtask-create'],
    mutationFn: (body: IMicrotaskAdd) => MicrotasksService.create(body),
    onSuccess,
    onError,
  });
};

export const useMicrotasksUpdate = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['microtask-update'],
    mutationFn: (body: IMicrotaskUpdate) => MicrotasksService.update(body),
    onSuccess,
    onError,
  });
};

export const useMicrotaskDelete = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['microtask-delete'],
    mutationFn: (id: string) => MicrotasksService.delete(id),
    onSuccess,
    onError,
  });
};
