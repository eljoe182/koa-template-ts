import UpdateTaskUseCase from '@features/example/application/UpdateTask.UseCase';
import { UpdateTask } from '@features/example/domain/interface/UpdateTask';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';

describe('Update Task UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
