import { PaginationParams, PaginationQuery } from "@/lib/queryparams";
import { paginationQueryToParams } from "@/lib/utils";
import { fetchProduct } from "@/repositories/api";
import useSWR from "swr";

export const productParamsSwrKey = (query?: PaginationQuery) => {
  const params: PaginationParams | undefined = query ? paginationQueryToParams(query) : undefined;

  if (params) {
    if (!params?.limit) delete params.limit;
    if (!params?.page) delete params.page;
  }

  return ["/product", params];
};

export const useProduct = (query?: PaginationQuery) => {
  const { data, mutate, error } = useSWR(
    productParamsSwrKey(query),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([path, params]) => fetchProduct(params as PaginationParams)
  );
  const loading = !data && !error;

  return {
    loading,
    mutate,
    data,
  };
};
