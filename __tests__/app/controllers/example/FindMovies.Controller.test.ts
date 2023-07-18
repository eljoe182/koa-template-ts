import { MoviesDependency as container } from '@dependencies';
import FindMoviesController from '@controllers/example/FindMovies.Controller';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Pagination } from '@shared/infrastructure/interfaces/Pagination';
import { Context } from 'koa';

const useCase: IBaseUseCase = container.get('Movies.UseCase.Find');
const controllerDependency: IBaseController = container.get('Movies.Controller.Find');

let controller: FindMoviesController;

describe('FindMovies.Controller: ', () => {

  beforeEach(() => {
    controller = new FindMoviesController(useCase);
  });

  it('should what dependency and class is same', () => {
    expect(controllerDependency).toBeInstanceOf(FindMoviesController);
    expect(controller).toBeInstanceOf(FindMoviesController);
  });

  it('should execute controller ', async () => {
    jest.spyOn(useCase, 'execute').mockResolvedValue([]);
    jest.spyOn(Pagination, 'fromQuery').mockReturnValue({ skip: 0, limit: 10 });

    const ctx: Context = { query: {}, response: {} } as unknown as Context;
    const result = await controller.run(ctx);

    expect(result).toBe(void 0);
  });
});
