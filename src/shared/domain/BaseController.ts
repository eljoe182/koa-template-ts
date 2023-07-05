import { Context } from 'koa';

export interface IBaseController {
  run(ctx: Context): Promise<void>;
}
