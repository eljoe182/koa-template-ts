import { Context } from 'koa';

import { PersistanceDependency as container } from '@dependencies';
import Logger from '@shared/domain/interfaces/Logger';

const logger: Logger = container.get('Shared.Logger');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ErrorHandler = (error: any, ctx: Context) => {
  logger.error(`Error: ${ctx.status} - ${ctx.message}`);

  if (error instanceof Error) {
    logger.error(error.stack || error.message);
    logger.error(JSON.stringify(ctx.body, null, 2));
  }
};
