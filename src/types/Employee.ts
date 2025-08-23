import { IPagination } from './Request';
import { ITask } from './Task';

export interface IEmployee {
  id: string;
  name: string;
  surname: string;
  img: string;
  tasks: ITask[];
}

export type IEmployeeCreate = Omit<IEmployee, 'id'>;

export type IEmployeeUpdate = IEmployeeCreate;

export interface IEmployeesGet {
  pagination?: IPagination;
}

export interface IEmployeesGetAllResponse {
  pageItems: IEmployee[];
  count: number;
}

export interface IEmployeeToTask {
  taskId: string;
  employeeId: string;
}
