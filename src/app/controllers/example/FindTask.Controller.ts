import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Context } from 'koa';

export default class FindTaskController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(ctx: Context): Promise<void> {
    const id = ctx.params as string;
    const result = await this.useCase.execute(id);
    ctx.response.body = result;
    ctx.response.status = 200;
  }
}
