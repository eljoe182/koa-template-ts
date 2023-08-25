import DestroyTaskUseCase from '@features/example/application/DestroyTask.UseCase';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';

describe('Destroy Task UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should successfully destroy a task with a valid id', async () => {
    // Given
    const taskId = TaskMother.random().id as string;
    const taskRepositoryMock: TaskRepository = {
      findAll: jest.fn(),
      get: jest.fn(),
      add: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };
    const destroyTaskUseCase = new DestroyTaskUseCase(taskRepositoryMock);

    // When
    await destroyTaskUseCase.execute(taskId);

    // Then
    expect(taskRepositoryMock.destroy).toHaveBeenCalledWith(taskId);
  });
});
