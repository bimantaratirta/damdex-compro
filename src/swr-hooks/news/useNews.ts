import { PaginationParams, PaginationQuery } from "@/lib/queryparams";
import { paginationQueryToParams } from "@/lib/utils";
import { fetchNews } from "@/repositories/api";
import useSWR from "swr";

export const newsParamsSwrKey = (query?: PaginationQuery) => {
  const params: PaginationParams | undefined = query ? paginationQueryToParams(query) : undefined;

  if (params) {
    if (!params?.limit) delete params.limit;
    if (!params?.page) delete params.page;
  }

  return ["/news", params];
};

export const useNews = (query?: PaginationQuery) => {
  const { data, mutate, error } = useSWR(
    newsParamsSwrKey(query),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([path, params]) => fetchNews(params as PaginationParams)
  );
  const loading = !data && !error;

  return {
    loading,
    mutate,
    data,
  };
};
