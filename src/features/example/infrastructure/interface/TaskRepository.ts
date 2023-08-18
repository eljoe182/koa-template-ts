import { Task } from '@features/example/domain/adapter/Task';
import { UpdateTask } from '@features/example/domain/interface/UpdateTask';

export interface TaskRepository {
  findAll(): Promise<Task[]>;
  get(id: string): Promise<Task | null>;
  add(task: Task): Promise<void>;
  update(updateTask: UpdateTask): Promise<void>;
  destroy(id: string): Promise<void>;
}
