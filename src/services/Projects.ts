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

  public getAll(body: IProjectsGet) {
    return axiosBase.get<IProjectResponse>(`${this.baseUrl}/getProjects`, {
      params: body.pagination,
    });
  }

  public create(body: IProjectCreate) {
    return axiosBase.post<IProject>(`${this.baseUrl}/createProject`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  public update(body: IProjectUpdate) {
    return axiosBase.put<IProject>(`${this.baseUrl}/updateProject`, body, {
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
