export interface MovieRepository<P = unknown, R = unknown> {
  findAll(params: P): Promise<R>;
}