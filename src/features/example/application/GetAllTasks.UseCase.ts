import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { TaskRepository } from '../infrastructure/interface/TaskRepository';
import { Task } from '../domain/adapter/Task';

export default class GetAllTasksUseCase implements IBaseUseCase {
  constructor(private repository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.repository.findAll();
  }
}
