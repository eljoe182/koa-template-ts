import {
    MoviesDependency as container, MoviesRepositoryDependency as repository
} from '@dependencies';
import FindMoviesUseCase from '@features/example/application/FindMovies.UseCase';
import { MovieRepository } from '@features/example/infrastructure/interface/MovieRepository';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Pagination } from '@shared/infrastructure/interfaces/Pagination';

const useCaseDependency: IBaseUseCase = container.get('Movies.UseCase.Find');
const repositoryDependency: MovieRepository = repository.get('Movies.Repository');
let useCase: FindMoviesUseCase;

describe('FindMovies.UseCase ', () => {
  beforeEach(() => {
    useCase = new FindMoviesUseCase(repositoryDependency);
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(FindMoviesUseCase);
    expect(useCase).toBeInstanceOf(FindMoviesUseCase);
  });

  it('should return a list of movies', async () => {
    jest.spyOn(repositoryDependency, 'findAll').mockResolvedValueOnce([]);

    const pagination: Pagination = { skip: 0, limit: 10 };
    const movies = await useCase.execute(pagination);

    expect(movies).toBeInstanceOf(Array);
  });
});
