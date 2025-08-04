import ProjectService from '@/services/Projects';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  IProject,
  IProjectCreate,
  IProjectResponse,
  IProjectsGet,
} from '@/types/Project';
import { AxiosError } from 'axios';

export const useProjectGetAll = (
  onSuccess?: (data: { data: IProjectResponse }) => void,
  onError?: (error: AxiosError<{ message: string }>) => void,
) => {
  return useMutation({
    mutationKey: ['projects'],
    mutationFn: (data: IProjectsGet) => ProjectService.getAll(data),
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

export const useProjectUpdate = () => {
  return useMutation({
    mutationKey: ['updateProject'],
    mutationFn: (data: IProject) => ProjectService.update(data.id, data),
  });
};

export const useProjectDelete = () => {
  return useMutation({
    mutationKey: ['deleteProject'],
    mutationFn: (id: string) => ProjectService.delete(id),
  });
};

export const useProjectGetOne = (id: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => ProjectService.getOne(id),
    enabled: false,
  });
};
