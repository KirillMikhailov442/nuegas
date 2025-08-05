import { axiosBase } from './axiosInstance';

class TasksService {
  private readonly baseUrl = '/projects';

  public getAll(id: string) {
    return axiosBase.get(`${this.baseUrl}/getTasks/${id}`);
  }
}

export default new TasksService();
