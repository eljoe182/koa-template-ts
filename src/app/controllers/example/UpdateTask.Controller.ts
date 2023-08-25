import { Task } from '@features/example/domain/adapter/Task';
import { UpdateTask } from '@features/example/domain/interface/UpdateTask';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Context } from 'koa';

export default class UpdateTaskController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(ctx: Context): Promise<void> {
    const task = ctx.request.body as Task;
    const id = ctx.params.id as string;

    const data: UpdateTask = { id, task };

    await this.useCase.execute(data);

    ctx.status = 200;
    ctx.body = { message: 'Task updated successfully' };
  }
}
