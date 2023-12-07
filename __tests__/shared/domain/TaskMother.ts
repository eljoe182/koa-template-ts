import { BooleanMother, StringMother, TextMother } from '@eljoe182/mother-object-pkg';
import { Task } from '@features/example/domain/adapter/Task';

export class TaskMother {
  static random(): Task {
    return new Task({
      id: StringMother.random({ length: 10, numeric: true }),
      name: TextMother.random(2),
      description: TextMother.random(10),
      completed: BooleanMother.random(),
    });
  }

  static randomList(): Task[] {
    return [TaskMother.random(), TaskMother.random(), TaskMother.random()];
  }
}
