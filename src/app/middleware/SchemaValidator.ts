import { Request } from 'koa';
import { AnyZodObject } from 'zod';

export class SchemaValidator {
  validate(schema: AnyZodObject, req: Request): void {
    schema.parse({
      body: req.body,
      query: req.query,
      querystring: req.querystring,
    });
  }
}
