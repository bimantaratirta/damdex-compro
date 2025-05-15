import { HomeParams, HomeQuery } from "@/lib/queryparams";
import { homeQuerytoParams } from "@/lib/utils";
import { fetchHome } from "@/repositories/api";
import useSWR from "swr";

export const HomeParamsSwrKey = (query?: HomeQuery) => {
  const params: HomeParams | undefined = query ? homeQuerytoParams(query) : undefined;

  return ["/homepage", params];
};

export const useHome = (query?: HomeQuery) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, mutate, error } = useSWR(HomeParamsSwrKey(query), ([path, params]) => fetchHome(params as HomeParams));
  const loading = !data && !error;

  return {
    loading,
    mutate,
    data,
  };
};
