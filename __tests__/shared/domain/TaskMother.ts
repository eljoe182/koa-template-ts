import { Task } from "@features/example/domain/adapter/Task";
import { BooleanMother, StringMother, TextMother } from "@eljoe182/mother-object-pkg"

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
    return [this.random(), this.random(), this.random()];
  }
}