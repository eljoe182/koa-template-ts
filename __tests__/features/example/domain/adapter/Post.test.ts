import { Post } from '@features/example/domain/adapter/Post';

describe('Post Adapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should initialize all properties with correct values when given a valid post argument', () => {
    // Given
    const post = new Post({
      userId: 1,
      id: 1,
      title: 'Test Title',
      body: 'Test Body',
    });

    // Then
    expect(post.userId).toBe(1);
    expect(post.id).toBe(1);
    expect(post.title).toBe('Test Title');
    expect(post.body).toBe('Test Body');
  });
});
