import { Comment } from '@features/example/domain/interface/Comments';

describe('Comments.Interface: ', () => {
  it('should what interface data is correct', () => {
    const comment: Comment = {
      email: 'example@',
      movie_id: '1',
      name: 'Example',
      text: 'Text Example',
      date: new Date(),
    };

    expect(comment).toHaveProperty('email');
  });

  // Tests that a comment can be created with all required fields
  it('test_comment_with_all_fields', () => {
    const comment: Comment = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      movie_id: '123',
      text: 'This is a comment',
      date: new Date(),
    };
    expect(comment).toHaveProperty('name');
    expect(comment).toHaveProperty('email');
    expect(comment).toHaveProperty('movie_id');
    expect(comment).toHaveProperty('text');
    expect(comment).toHaveProperty('date');
  });
});