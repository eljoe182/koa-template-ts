import { IntegerMother, StringMother, TextMother } from '@eljoe182/mother-object-pkg';
import { Post } from '@features/example/domain/adapter/Post';

export class PostMother {
  static random(): Post {
    return {
      userId: IntegerMother.random(),
      id: IntegerMother.random(),
      title: StringMother.random({ length: 3 }),
      body: TextMother.random(10),
    };
  }

  static randomList(): Post[] {
    return [PostMother.random(), PostMother.random(), PostMother.random()];
  }
}
