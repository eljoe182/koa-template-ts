export class Pagination {
  limit: number;
  skip: number;
  constructor(limit: string, skip: string) {
    this.limit = parseInt(limit || '0');
    this.skip = parseInt(skip || '0');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromQuery(query: any): Pagination {
    return new Pagination(query.limit, query.skip);
  }
}