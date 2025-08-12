import ProjectService from '@services/Projects';
import { useQuery, useMutation } from 'react-query';
import {
  IProject,
  IProjectCreate,
  IProjectResponse,
  IProjectsGet,
  IProjectUpdate,
} from '@/types/Project';
import { AxiosError } from 'axios';

export const useProjectGetAll = (
  data: IProjectsGet,
  onSuccess?: (data: { data: IProjectResponse }) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => ProjectService.getAll(data),
    onSuccess,
    onError,
  });
};

export const useProjectCreate = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['createProject'],
    mutationFn: (data: IProjectCreate) => ProjectService.create(data),
    onSuccess,
    onError,
  });
};

export const useProjectUpdate = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['updateProject'],
    mutationFn: (data: IProjectUpdate) => ProjectService.update(data),
    onSuccess,
    onError,
  });
};

export const useProjectDelete = (
  onSuccess?: () => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['deleteProject'],
    mutationFn: (id: string) => ProjectService.delete(id),
    onSuccess,
    onError,
  });
};

export const useProjectGetOne = (
  id: string,
  onSuccess?: (data: IProject) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => ProjectService.getOne(id),
    enabled: !!id,
    select: data => data.data,
    onSuccess,
    onError,
  });
};
