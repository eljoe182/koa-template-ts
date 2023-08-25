import GetAllTasksUseCase from '@features/example/application/GetAllTasks.UseCase';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';

describe('Get All Tasks UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should return an array of tasks when findAll() function is successful', async () => {
    // Given
    const mockTasks = [TaskMother.random(), TaskMother.random()];
    const taskRepositoryMock: TaskRepository = {
      findAll: jest.fn().mockResolvedValue(mockTasks),
      get: jest.fn(),
      add: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };
    const useCase = new GetAllTasksUseCase(taskRepositoryMock);

    // When
    const result = await useCase.execute();

    // Then
    expect(result).toEqual(mockTasks);
    expect(taskRepositoryMock.findAll).toHaveBeenCalledTimes(1);
  });
});
