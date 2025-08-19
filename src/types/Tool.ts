import { IPagination } from './Request';

export interface ITool {
  id: string;
  name: string;
}

export type IToolAdd = Omit<ITool, 'id'>;

export type IToolUpdate = ITool;

export interface IToolsGet {
  pagination?: IPagination;
}

export interface IToolResponse {
  pageItems: ITool[];
  count: number;
}

export interface IToolToTask {
  taskId: string;
  toolId: string;
}
