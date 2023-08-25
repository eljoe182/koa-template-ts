import AddTaskUseCase from '@features/example/application/AddTask.UseCase';
import { Task } from '@features/example/domain/adapter/Task';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';

describe('Add Task UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should add a new task to the repository', async () => {
    // Given
    const taskRepositoryMock: TaskRepository = {
      add: jest.fn(),
      findAll: jest.fn(),
      get: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };
    const useCase = new AddTaskUseCase(taskRepositoryMock);
    const task: Task = TaskMother.random();

    // When
    await useCase.execute(task);

    // Then
    expect(taskRepositoryMock.add).toHaveBeenCalledWith(task);
  });
});
