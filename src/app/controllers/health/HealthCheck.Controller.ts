import { Context } from 'koa';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

export default class HealthCheckController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}
  async run(ctx: Context): Promise<void> {
    ctx.status = 200;
    ctx.body = await this.useCase.execute();
  }
}