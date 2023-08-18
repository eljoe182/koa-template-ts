import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { TaskRepository } from '../infrastructure/interface/TaskRepository';
import { Task } from '../domain/adapter/Task';

export default class AddTaskUseCase implements IBaseUseCase {
  constructor(private repository: TaskRepository) {}

  async execute(task: Task): Promise<void> {
    return this.repository.add(task);
  }
}
