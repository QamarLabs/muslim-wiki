export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface APIResult<T> {
  results: T;
  status: number;
}

export class PaginatedResult<T> {
  data: T;
  pagination: Pagination;

  constructor(data: T, pagination: Pagination) {
    this.data = data;
    this.pagination = pagination;
  }
}

export class PagingParams {
  pageNumber;
  pageSize;

  constructor(pageNumber = 1, pageSize = 10) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }
}


export interface NavItem {
  id: string;
  title: string;
  items: string[];
}

export enum AutocompleteType {
  Navbar = "navbar",
  Search = "search"
}