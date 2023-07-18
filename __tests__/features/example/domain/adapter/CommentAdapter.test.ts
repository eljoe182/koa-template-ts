import { CommentSchema } from '@features/example/domain/adapter/CommentAdapter'
import { Comment } from '@features/example/domain/interface/Comments';

describe('CommentAdapter: ', () => {

  it('should be same data vs schema', () => {

    const commentData: Comment = {
      name: 'name',
      email: 'example@domain.ltd',
      movie_id: 'movie_id',
      text: 'text',
    };

    const result = CommentSchema.parse(commentData);

    expect(result).toMatchObject(commentData);
  });
});
