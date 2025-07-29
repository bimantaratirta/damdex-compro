import useSWR from "swr";
import { fetchNewsbyId } from "@/repositories/api";

export const newsKey = (id: number) => `/gallery-event/${id}`;

export const useNewsDetail = (id: number) => {
  const { data, error, mutate } = useSWR([newsKey(id), id], () => fetchNewsbyId(id));

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
};
