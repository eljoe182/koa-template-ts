import DestroyTaskUseCase from '@features/example/application/DestroyTask.UseCase';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { TaskMother } from '@test/shared/domain/TaskMother';

const useCaseDependency: IBaseUseCase = container.get('Tasks.UseCase.Destroy');
const repository: TaskRepository = container.get('Tasks.Repository');
let useCase: DestroyTaskUseCase;

describe('Destroy Task UseCase', () => {
  beforeEach(() => {
    useCase = new DestroyTaskUseCase(repository);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(DestroyTaskUseCase);
    expect(useCase).toBeInstanceOf(DestroyTaskUseCase);
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
