import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Context } from 'koa';

export default class DestroyTaskController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(ctx: Context): Promise<void> {
    const id = ctx.params.id as string;

    await this.useCase.execute(id);

    ctx.response.status = 200;
    ctx.response.body = { message: 'Task deleted successfully' };
  }
}
