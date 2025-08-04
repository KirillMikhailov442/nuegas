import { IPagination } from './Request';

export interface IEmployee {
  id: string;
}

export type IEmployeeCreate = Omit<IEmployee, 'id'>;

export type IEmployeeUpdate = IEmployeeCreate;

export interface IEmployeesGet {
  pagination?: IPagination;
}

export interface IEmployeeResponse {
  pageItems: IEmployee[];
  count: number;
}
