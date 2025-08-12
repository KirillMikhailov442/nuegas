import { axiosBase } from './axiosInstance';

class TasksService {
  private readonly baseUrl = '/projects';

  public getAll(id: string) {
    return axiosBase.get(`${this.baseUrl}/getTasks/${id}`);
  }

  public getOne(id: string) {}
}

export default new TasksService();
