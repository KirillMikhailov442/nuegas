import { IMicrotask, IMicrotaskAdd, IMicrotaskUpdate } from '@/types/Microtask';
import { axiosBase } from './axiosInstance';

class MicrotasksService {
  private readonly baseUrl = '/projects';

  public getOne(id: string) {
    return axiosBase.get<IMicrotask>(`${this.baseUrl}/getMicrotask/${id}`);
  }

  public create(body: IMicrotaskAdd) {
    return axiosBase.post(`${this.baseUrl}/addMicrotask`, body);
  }

  public update(body: IMicrotaskUpdate) {
    return axiosBase.put(`${this.baseUrl}/updateMicrotask`, body);
  }

  public delete(id: string) {
    return axiosBase.delete(`${this.baseUrl}/deleteMicrotask/${id}`);
  }
}

export default new MicrotasksService();
