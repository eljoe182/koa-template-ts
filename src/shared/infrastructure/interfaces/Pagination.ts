interface query {
  limit: string;
  skip: string;
}

export class Pagination {
  limit: number;
  skip: number;
  constructor(limit: string, skip: string) {
    this.limit = parseInt(limit || '0');
    this.skip = parseInt(skip || '0');
  }

  static fromQuery(query: query): Pagination {
    return new Pagination(query.limit, query.skip);
  }
}
