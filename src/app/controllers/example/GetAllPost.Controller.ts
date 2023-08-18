import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Context } from 'koa';

export default class GetAllPostController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(ctx: Context) {
    const result = await this.useCase.execute();
    ctx.status = 200;
    ctx.body = result;
  }
}
