export interface ServerPagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class ServerPaginatedResult<T> {
  data: T;
  pagination: ServerPagination;

  constructor(data: T, pagination: ServerPagination) {
    this.data = data;
    this.pagination = pagination;
  }
}
