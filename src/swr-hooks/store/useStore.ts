import useSWR from "swr";
import { fetchStore } from "@/repositories/api";
import { paginationQueryToParams } from "@/lib/utils";
import { PaginationParams, PaginationQuery } from "@/lib/queryparams";

export const storeParamsSwrKey = (query?: PaginationQuery) => {
  const params: PaginationParams | undefined = query ? paginationQueryToParams(query) : undefined;

  if (params) {
    if (!params?.limit) delete params.limit;
    if (!params?.page) delete params.page;
  }

  return ["/store", params];
};

export const useStore = (query?: PaginationQuery) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, mutate, error } = useSWR(storeParamsSwrKey(query), ([path, params]) =>
    fetchStore(params as PaginationParams)
  );
  const loading = !data && !error;

  return {
    loading,
    mutate,
    data,
  };
};
