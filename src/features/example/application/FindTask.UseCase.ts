import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Task } from '../domain/adapter/Task';
import { TaskRepository } from '../infrastructure/interface/TaskRepository';

export default class FindTaskUseCase implements IBaseUseCase {
  constructor(private repository: TaskRepository) {}

  async execute(id: string): Promise<Task | null> {
    return this.repository.get(id);
  }
}
