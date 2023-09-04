export interface Producer<R = unknown, D = unknown> {
  send: (topic: string, message: D) => Promise<R>;
}
