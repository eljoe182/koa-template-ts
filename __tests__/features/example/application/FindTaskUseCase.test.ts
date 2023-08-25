import FindTaskUseCase from '@features/example/application/FindTask.UseCase';
import { Task } from '@features/example/domain/adapter/Task';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';

describe('Find Task UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should return a Task object when a valid id is passed', async () => {
    // Given
    const task = TaskMother.random();
    const taskId = task.id;
    const taskRepositoryMock: TaskRepository = {
      findAll: jest.fn(),
      get: jest.fn().mockResolvedValue(task),
      add: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };
    const findTaskUseCase = new FindTaskUseCase(taskRepositoryMock);

    // When
    const result = await findTaskUseCase.execute(taskId as string);

    // Then
    expect(result).toEqual(new Task(task));
    expect(taskRepositoryMock.get).toHaveBeenCalledWith(taskId);
  });
});
