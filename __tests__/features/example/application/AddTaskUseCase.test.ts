import AddTaskUseCase from '@features/example/application/AddTask.UseCase';
import { Task } from '@features/example/domain/adapter/Task';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';
import { TaskDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

const useCaseDependency: IBaseUseCase = container.get('Tasks.UseCase.Add');
const repository: TaskRepository = container.get('Tasks.Repository');
let useCase: AddTaskUseCase;

describe('Add Task UseCase', () => {
  beforeEach(() => {
    useCase = new AddTaskUseCase(repository);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(AddTaskUseCase);
    expect(useCase).toBeInstanceOf(AddTaskUseCase);
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
