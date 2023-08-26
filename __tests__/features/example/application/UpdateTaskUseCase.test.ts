import UpdateTaskUseCase from '@features/example/application/UpdateTask.UseCase';
import { UpdateTask } from '@features/example/domain/interface/UpdateTask';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';
import { TaskDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

const useCaseDependency: IBaseUseCase = container.get('Tasks.UseCase.Update');
const repository: TaskRepository = container.get('Tasks.Repository');
let useCase: UpdateTaskUseCase;

describe('Update Task UseCase', () => {
  beforeEach(() => {
    useCase = new UpdateTaskUseCase(repository);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(UpdateTaskUseCase);
    expect(useCase).toBeInstanceOf(UpdateTaskUseCase);
  });

  it('should update a task successfully', async () => {
    // Given
    const task = TaskMother.random();
    const taskId = task.id as string;
    const updatedTask = {
      ...task,
      description: 'Updated description',
    };
    const taskParams: UpdateTask = {
      id: taskId,
      task,
    };
    const taskRepositoryMock: TaskRepository = {
      findAll: jest.fn(),
      get: jest.fn(),
      add: jest.fn(),
      update: jest.fn().mockResolvedValue(updatedTask),
      destroy: jest.fn(),
    };
    const useCase = new UpdateTaskUseCase(taskRepositoryMock);

    // When
    await useCase.execute(taskParams);

    // Then
    expect(taskRepositoryMock.update).toHaveBeenCalledWith(taskParams);
  });
});
