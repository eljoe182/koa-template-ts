import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { TaskRepository } from '../infrastructure/interface/TaskRepository';

export default class DestroyTaskUseCase implements IBaseUseCase {
  constructor(private repository: TaskRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.destroy(id);
  }
}
