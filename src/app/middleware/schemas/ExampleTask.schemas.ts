import { AnyZodObject, z as ZValidator } from 'zod';

export class ExampleAddTaskSchema {
  addTask(): AnyZodObject {
    return ZValidator.object({
      body: ZValidator.object({
        name: ZValidator.string().min(3).max(255),
        description: ZValidator.string().min(3).max(255),
      }),
    });
  }

  findTaskById(): AnyZodObject {
    return ZValidator.object({
      params: ZValidator.object({
        id: ZValidator.string().uuid(),
      }),
    });
  }

  updateTaskById(): AnyZodObject {
    return ZValidator.object({
      params: ZValidator.object({
        id: ZValidator.string().uuid(),
      }),
      body: ZValidator.object({
        name: ZValidator.string().min(3).max(255),
        description: ZValidator.string().min(3).max(255),
        completed: ZValidator.boolean(),
      }),
    });
  }

  deleteTaskById(): AnyZodObject {
    return ZValidator.object({
      params: ZValidator.object({
        id: ZValidator.string().uuid(),
      }),
    });
  }
}
