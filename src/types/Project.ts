import { IPagination } from './Request';

export interface IProject {
  id: string;
  title: string;
  description: string;
  img: string;
  customer: string;
  company: string;
}

export type IProjectCreate = Omit<IProject, 'id'>;

export type IProjectUpdate = Omit<IProject, 'company'>;

export interface IProjectsGet {
  pagination?: IPagination;
}

export interface IProjectResponse {
  pageItems: IProject[];
  count: number;
}
