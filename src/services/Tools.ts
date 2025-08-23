import {
  ITool,
  IToolAdd,
  IToolResponse,
  IToolsGet,
  IToolToTask,
  IToolUpdate,
} from '@/types/Tool';
import { axiosBase } from './axiosInstance';

class ToolsService {
  private readonly baseUrl = '/company';

  public getAll(body: IToolsGet) {
    return axiosBase.get<IToolResponse>(`${this.baseUrl}/getTools`, {
      params: { ...body },
    });
  }

  public getOne(id: string) {
    return axiosBase.get<ITool>(`${this.baseUrl}/getTool/${id}`);
  }

  public create(body: IToolAdd) {
    return axiosBase.post<ITool>(`${this.baseUrl}/addTool`, body);
  }
  public update(body: IToolUpdate) {
    return axiosBase.put(`${this.baseUrl}/updateTool`, body);
  }

  public delete(id: string) {
    return axiosBase.delete(`${this.baseUrl}/deleteTool/${id}`);
  }

  public addToTask(body: IToolToTask) {
    return axiosBase.post(`/projects/addToolToTask`, body);
  }

  public removeFromTask(body: IToolToTask) {
    return axiosBase.post(`/projects/deleteToolFromTask`, body);
  }
}

export default new ToolsService();
