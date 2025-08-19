import {
  IEmployeesGet,
  IEmployeesGetAllResponse,
  IEmployeeToTask,
} from '@/types/Employee';
import { axiosBase } from './axiosInstance';

class EmploeesService {
  private readonly baseUrl = '/company';

  public getAll(body: IEmployeesGet) {
    return axiosBase.get<IEmployeesGetAllResponse>(
      `${this.baseUrl}/getEmployees`,
      {
        params: body.pagination,
      },
    );
  }

  public addToTask(body: IEmployeeToTask) {
    return axiosBase.post(`/projects/addEmployeeToTask`, body);
  }

  public removeFromTask(body: IEmployeeToTask) {
    return axiosBase.post(`/projects/deleteEmployeeFromTask`, body);
  }
}

export default new EmploeesService();
