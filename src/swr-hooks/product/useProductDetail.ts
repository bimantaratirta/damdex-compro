import useSWR from "swr";
import { fetchProductbyId } from "@/repositories/api";

export const productKey = (id: string) => `/product/${id}`;

export const useProductDetail = (id: string) => {
  const { data, error, mutate } = useSWR([productKey(id), id], () => fetchProductbyId(id));

  const loading = !data && !error;

  return {
    audio: data,
    loading,
    error,
    mutate,
  };
};
