import { TaskRepositoryDependency as container } from '@dependencies';
import { TaskRepository } from '@features/example/infrastructure/interface/TaskRepository';
import MongoTaskRepository from '@features/example/infrastructure/persistance/MongoTaskRepository';
import { TaskMother } from '@test/shared/domain/TaskMother';

const repositoryDependency: TaskRepository = container.get('Tasks.Repository');
const connection = container.get('Shared.Connection.Mongo');
let repository: MongoTaskRepository;

describe('Mongo Task Repository', () => {
  beforeEach(() => {
    repository = new MongoTaskRepository(connection);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(repositoryDependency).toBeInstanceOf(MongoTaskRepository);
    expect(repository).toBeInstanceOf(MongoTaskRepository);
  });

  it('should create a task', async () => {
    // Given
    const tasks = TaskMother.randomList();
    jest.spyOn(repository, 'findAll').mockResolvedValue(tasks);

    // When
    const result = await repository.findAll();

    // Then
    expect(result).toBeInstanceOf(Array);
  });
});
