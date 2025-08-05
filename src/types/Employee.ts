import { IPagination } from './Request';

export interface IEmployee {
  id: string;
  name: string;
  surname: string;
  img: string;
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
