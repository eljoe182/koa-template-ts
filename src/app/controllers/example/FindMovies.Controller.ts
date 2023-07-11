import { Context } from 'koa';
import { IBaseController } from '../../../shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '../../../shared/infrastructure/interfaces/BaseUseCase';
import { Pagination } from '../../../shared/infrastructure/interfaces/Pagination';

export default class FindMoviesController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(ctx: Context): Promise<void> {
    const { query, response } = ctx;
    const queryParams = Pagination.fromQuery(query);
    const result = await this.useCase.execute(queryParams);

    response.body = result;
    response.status = 200;
  }
}