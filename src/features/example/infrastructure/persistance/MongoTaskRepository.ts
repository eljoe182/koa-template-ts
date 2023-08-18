import { MongoRepository } from '@shared/infrastructure/persistance/mongo/MongoRepository';
import { TaskRepository } from '../interface/TaskRepository';
import { ObjectId } from 'mongodb';
import { Task } from '@features/example/domain/adapter/Task';
import { UpdateTask } from '@features/example/domain/interface/UpdateTask';

export default class MongoTaskRepository extends MongoRepository implements TaskRepository {
  protected collectionName(): string {
    return 'tasks';
  }

  async findAll(): Promise<Task[]> {
    const collection = await this.collection();
    const result = await collection.find<Task>({}).toArray();

    return result;
  }

  async get(id: string): Promise<Task | null> {
    const collection = await this.collection();
    const result = await collection.findOne<Task | null>({ _id: new ObjectId(id) });

    return result;
  }

  async add(params: Task): Promise<void> {
    const collection = await this.collection();
    await collection.insertOne({
      ...params,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async update(updateTask: UpdateTask): Promise<void> {
    const collection = await this.collection();
    await collection.updateOne(
      { _id: new ObjectId(updateTask.id) },
      {
        $set: {
          name: updateTask.task.name,
          description: updateTask.task.description,
          completed: updateTask.task.completed,
          updatedAt: new Date(),
        },
      },
      {
        ignoreUndefined: true,
      }
    );
  }

  async destroy(id: string): Promise<void> {
    const collection = await this.collection();
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}
