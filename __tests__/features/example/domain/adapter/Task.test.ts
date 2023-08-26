import { Task } from '@features/example/domain/adapter/Task';

describe('Task Adapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new task with all required fields', () => {
    // Given
    const taskData = {
      id: '1',
      name: 'Task 1',
      description: 'Description of Task 1',
      completed: true,
    };

    // When
    const task = new Task(taskData);

    // Then
    expect(task.id).toBe('1');
    expect(task.name).toBe('Task 1');
    expect(task.description).toBe('Description of Task 1');
    expect(task.completed).toBe(true);
  });
});
