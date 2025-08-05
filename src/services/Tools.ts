import {
  ITool,
  IToolAdd,
  IToolResponse,
  IToolsGet,
  IToolUpdate,
} from '@/types/Tool';
import { axiosBase } from './axiosInstance';

class ToolsService {
  private readonly baseUrl = '/company';

  public getAll(data: IToolsGet) {
    return axiosBase.get<IToolResponse>(`${this.baseUrl}/getTools`, {
      params: data,
    });
  }

  public create(data: IToolAdd) {
    return axiosBase.post<ITool>(`${this.baseUrl}/addTool`, data);
  }
  public update(data: IToolUpdate) {
    return axiosBase.put(`${this.baseUrl}/updateTool`, data);
  }

  public delete(id: string) {
    return axiosBase.delete(`${this.baseUrl}/deleteTool/${id}`);
  }
}

export default new ToolsService();
