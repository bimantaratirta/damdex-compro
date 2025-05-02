import { PaginationParams, PaginationQuery } from "@/lib/queryparams";
import { paginationQueryToParams } from "@/lib/utils";
import { fetchEventGallery } from "@/repositories/api";
import useSWR from "swr";

export const eventParamsSwrKey = (query?: PaginationQuery) => {
  const params: PaginationParams | undefined = query ? paginationQueryToParams(query) : undefined;

  if (params) {
    if (!params?.limit) delete params.limit;
    if (!params?.page) delete params.page;
  }

  return ["/gallery-event", params];
};

export const useEvent = (query?: PaginationQuery) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, mutate, error } = useSWR(eventParamsSwrKey(query), ([path, params]) =>
    fetchEventGallery(params as PaginationParams)
  );
  const loading = !data && !error;

  return {
    loading,
    mutate,
    data,
  };
};
