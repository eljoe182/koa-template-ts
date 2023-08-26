import FindTaskUseCase from '@features/example/application/FindTask.UseCase';
import { Task } from '@features/example/domain/adapter/Task';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';
import { TaskDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

const useCaseDependency: IBaseUseCase = container.get('Tasks.UseCase.Find');
const repository: TaskRepository = container.get('Tasks.Repository');
let useCase: FindTaskUseCase;

describe('Find Task UseCase', () => {
  beforeEach(() => {
    useCase = new FindTaskUseCase(repository);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(FindTaskUseCase);
    expect(useCase).toBeInstanceOf(FindTaskUseCase);
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
