import { Task } from '@features/example/domain/adapter/Task';
import { Producer } from '@shared/domain/interfaces/Producer';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Context } from 'koa';

export default class AddTaskController implements IBaseController {
  constructor(
    private useCase: IBaseUseCase<Task, Task>,
    private producer: Producer<unknown, Task>
  ) {}

  async run(ctx: Context): Promise<void> {
    const task = ctx.request.body as Task;

    await this.producer.send('topic_52', task);
    await this.useCase.execute(task);

    ctx.response.status = 201;
    ctx.response.body = { message: 'Task added successfully' };
  }
}
