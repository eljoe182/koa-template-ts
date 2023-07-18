import { Context } from 'koa';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

export default class AddCommentController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(ctx: Context): Promise<void> {
    const { body } = ctx.request;

    const result = await this.useCase.execute(body);
    
    ctx.response.body = result;
    ctx.response.status = 200;
  }
}