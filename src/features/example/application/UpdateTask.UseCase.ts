import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { UpdateTask } from '../domain/interface/UpdateTask';
import { TaskRepository } from '../infrastructure/interface/TaskRepository';

export default class UpdateTaskUseCase implements IBaseUseCase {
  constructor(private repository: TaskRepository) {}
  async execute(data: UpdateTask): Promise<void> {
    await this.repository.update(data);
  }
}
