import { IEmployee } from './Employee';
import { IPagination } from './Request';

export interface ITask {
  id: string;
  title: string;
  description: string;
  img: string;
  deadline: string;
  employees: IEmployee[];
}

export type ITaskCreate = Omit<ITask, 'id'>;

export type ITaskUpdate = ITaskCreate;

export interface ITasksGet {
  pagination?: IPagination;
}

export interface ITasksGetAllResponse {
  pageItems: ITask[];
  count: number;
}
