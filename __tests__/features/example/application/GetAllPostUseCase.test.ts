import GetAllPostUseCase from '@features/example/application/GetAllPost.UseCase';
import { PostRepository } from '@features/example/infrastructure/interface/PostRepository';
import { PostMother } from '@test/shared/domain/PostMother';
import { TaskDependency as container } from '@dependencies';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

const useCaseDependency: IBaseUseCase = container.get('Posts.UseCase.GetAll');
const repository: PostRepository = container.get('Posts.Repository');
let useCase: GetAllPostUseCase;

describe('Get All Posts UseCase', () => {
  beforeEach(() => {
    useCase = new GetAllPostUseCase(repository);
    jest.clearAllMocks();
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(GetAllPostUseCase);
    expect(useCase).toBeInstanceOf(GetAllPostUseCase);
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
