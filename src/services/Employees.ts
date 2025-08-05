import { IEmployeesGet, IEmployeesGetAllResponse } from '@/types/Employee';
import { axiosBase } from './axiosInstance';

class EmploeesService {
  private readonly baseUrl = '/company';

  public getAll(data: IEmployeesGet) {
    return axiosBase.get<IEmployeesGetAllResponse>(
      `${this.baseUrl}/getEmployees`,
      {
        params: data.pagination,
      },
    );
  }
}

export default new EmploeesService();
