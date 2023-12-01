import { Context, Next } from 'koa';
import { ZodError } from 'zod';

export const ErrorRouteHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof ZodError) {
      const issuesString = error.errors.map((issue, index) => {
        const formattedString = `${index} [message]: ${issue.message} - [code]: ${issue.code} [path]: ${issue.path.join(
          ' > '
        )}`;
        return formattedString;
      });

      const newError = new Error(issuesString.join('\n'));

      ctx.status = 400;
      ctx.body = error.errors;
      ctx.app.emit('error', newError, ctx);
      return;
    }

    error.status = error.statusCode || error.status || 500;
    error.message = error.message || 'Internal Server Error';
    ctx.app.emit('error', error, ctx);
  }
};
