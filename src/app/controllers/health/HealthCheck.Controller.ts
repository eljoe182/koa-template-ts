import { Context } from 'koa';
import { IBaseController } from '../../../shared/domain/BaseController';
import { IBaseUseCase } from '../../../shared/domain/BaseUseCase';

export default class HealthCheckController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}
  async run(ctx: Context): Promise<void> {
    ctx.status = 200;
    ctx.body = await this.useCase.execute();
  }
}