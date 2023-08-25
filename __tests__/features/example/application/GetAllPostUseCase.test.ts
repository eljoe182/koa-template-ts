import GetAllPostUseCase from '@features/example/application/GetAllPost.UseCase';
import { PostRepository } from '@features/example/infrastructure/interface/PostRepository';
import { PostMother } from '@test/shared/domain/PostMother';

describe('Get All Posts UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should return all posts from the repository', async () => {
    // Given
    const mockPosts = [PostMother.random(), PostMother.random()];
    const mockRepository: PostRepository = {
      getPosts: jest.fn().mockResolvedValue(mockPosts),
    };
    const useCase = new GetAllPostUseCase(mockRepository);

    // When
    const result = await useCase.execute();

    // Then
    expect(result).toEqual(mockPosts);
    expect(mockRepository.getPosts).toHaveBeenCalledTimes(1);
    expect(mockRepository.getPosts).toHaveBeenCalledWith();
  });
});
