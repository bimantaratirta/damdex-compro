import { HomeParams, HomeQuery, PaginationParams, PaginationQuery } from "./queryparams";

export const paginationQueryToParams = (query: PaginationQuery): PaginationParams => {
  return {
    page: query.page ?? undefined,
    limit: query.limit ?? undefined,
  };
};

export const handleChangePaginationQuery = (q: PaginationQuery) => {
  if (q) {
    if (!q?.limit) delete q.limit;
    if (!q?.page) delete q.page;
  }

  return q;
};

export const homeQuerytoParams = (query: HomeQuery): HomeParams => {
  return {
    lang: query.lang ?? undefined,
    section: query.section ?? undefined,
  };
};
