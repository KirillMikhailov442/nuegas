import {
  IProject,
  IProjectCreate,
  IProjectResponse,
  IProjectsGet,
  IProjectUpdate,
} from '@/types/Project';
import { axiosBase } from './axiosInstance';

class ProjectsService {
  private readonly baseUrl = '/projects';

  public getAll(data: IProjectsGet) {
    return axiosBase.get<IProjectResponse>(`${this.baseUrl}/getProjects`, {
      params: data.pagination,
    });
  }

  public create(data: IProjectCreate) {
    return axiosBase.post<IProject>(`${this.baseUrl}/createProject`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  public update(data: IProjectUpdate) {
    return axiosBase.put<IProject>(`${this.baseUrl}/updateProject`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  public delete(id: string) {
    return axiosBase.delete<IProject>(`${this.baseUrl}/deleteProject/${id}`);
  }

  public getOne(id: string) {
    return axiosBase.get<IProject>(`${this.baseUrl}/getProject/${id}`);
  }
}

export default new ProjectsService();
