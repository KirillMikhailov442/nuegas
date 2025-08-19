import { IEmployee } from './Employee';
import { IMicrotask } from './Microtask';
import { IPagination } from './Request';
import { ITool } from './Tool';

export interface ITask {
  id: string;
  title: string;
  description: string;
  img: string;
  deadline: string;
  cords: string;
  employees: IEmployee[];
  tools: ITool[];
  microtasks: IMicrotask[];
}

export interface ITaskCreate {
  projectdId: string;
  title: string;
  description: string;
  cords: string;
  deadline: string;
}

export interface ITaskUpdate {
  id: string;
  title: string;
  description: string;
  cords: string;
  deadline: string;
}

export interface ITasksGet {
  pagination?: IPagination;
}

export interface ITasksGetAllResponse {
  pageItems: ITask[];
  count: number;
}
