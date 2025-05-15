import { fetchUseCompositionNoPagination } from "@/repositories/api";
import useSWR from "swr";

export const useUsageCompositionOptions = () => {
  const { data, error, mutate } = useSWR("/use/use-composition/get-use-composition-options", () =>
    fetchUseCompositionNoPagination()
  );

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
};
