export class Task {
  readonly id?: string | null;
  readonly name: string;
  readonly description: string;
  readonly completed?: boolean | null;
  constructor(task: Task) {
    this.id = task.id;
    this.name = task.name;
    this.description = task.description;
    this.completed = task.completed;
  }
}
