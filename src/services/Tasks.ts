import { ITaskCreate, ITaskUpdate } from '@/types/Task';
import { axiosBase } from './axiosInstance';

class TasksService {
  private readonly baseUrl = '/projects';

  public getAll(id: string) {
    return axiosBase.get(`${this.baseUrl}/getTasks/${id}`);
  }

  public getOne(id: string) {
    return axiosBase.get(`${this.baseUrl}/getTask/${id}`);
  }

  public create(body: ITaskCreate) {
    return axiosBase.post(`${this.baseUrl}/addTask`, body);
  }

  public update(body: ITaskUpdate) {
    return axiosBase.put(`${this.baseUrl}/updateTask`, body);
  }

  public delete(id: string) {
    return axiosBase.delete(`${this.baseUrl}/deleteTask/${id}`);
  }
}

export default new TasksService();
