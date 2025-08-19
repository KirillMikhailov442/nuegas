export interface IMicrotask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface IMicrotaskAdd {
  taskId: string;
  title: string;
  description?: string;
  isCompleted?: boolean;
}

export type IMicrotaskUpdate = IMicrotask;
