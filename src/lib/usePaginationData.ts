import { usePathname, useRouter } from "next/navigation";
import React from "react";

type PaginationData = {
  pageIndex: number;
  pageSize: number;
};

export const usePaginationData = (val?: { pageSize?: number; pageIndex?: number; isNonTable?: boolean }) => {
  const [pagination, setPagination] = React.useState<PaginationData>({
    pageIndex: val?.pageIndex ?? 1,
    pageSize: val?.pageSize ?? 10,
  });
  const router = useRouter();
  const pathname = usePathname();
  const handlePaginationModelChange = (data: { pageIndex: number; pageSize: number }) => {
    const params = new URLSearchParams();
    params.set("page", data.pageIndex.toString());
    params.set("size", data.pageSize.toString());
    setPagination({
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
    });
    console.log(`${pathname}?${params.toString()}`);
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    handlePaginationModelChange,
    pagination,
  };
};
