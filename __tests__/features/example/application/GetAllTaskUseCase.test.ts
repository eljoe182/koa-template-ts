import GetAllTasksUseCase from '@features/example/application/GetAllTasks.UseCase';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { TaskMother } from '@test/shared/domain/TaskMother';

const useCaseDependency: IBaseUseCase = container.get('Tasks.UseCase.GetAll');
const repository: TaskRepository = container.get('Tasks.Repository');
let useCase: GetAllTasksUseCase;

describe('Get All Tasks UseCase', () => {
  beforeEach(() => {
    useCase = new GetAllTasksUseCase(repository);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(GetAllTasksUseCase);
    expect(useCase).toBeInstanceOf(GetAllTasksUseCase);
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
