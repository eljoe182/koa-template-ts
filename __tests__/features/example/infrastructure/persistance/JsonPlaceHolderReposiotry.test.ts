import { JsonPlaceHolderRepositoryDependency as container } from '@dependencies';
import JsonPlaceHolderRepository from '@features/example/infrastructure/persistance/JsonPlaceHolderRepository';

const repository: JsonPlaceHolderRepository = container.get('Posts.Repository');

describe('Json Place Holder Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should retrieve all posts from the server', async () => {
    // When
    const result = await repository.getPosts();

    // Then
    expect(result).toBeInstanceOf(Array);
  });
});
