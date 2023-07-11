export interface CommentRepository<P = unknown, R = unknown> {
  add(params: P): Promise<R>;
}