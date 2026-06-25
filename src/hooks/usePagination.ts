import { useEffect, useMemo, useState } from "react";

const DEFAULT_PAGE_SIZE = 10;

/**
 * Pagination hook
 * @param items Full list to paginate (already filtered/sorted)
 * @param initialPageSize Initial page size
 */
export function usePagination<T>(
  items: T[],
  initialPageSize: number = DEFAULT_PAGE_SIZE
) {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSizeState] = useState<number>(initialPageSize);

  const total = items.length;

  const totalPages = useMemo<number>(() => {
    if (total <= 0) return 1;
    return Math.max(1, Math.ceil(total / pageSize));
  }, [total, pageSize]);

  useEffect(() => {
    setPage((prev) => Math.min(Math.max(1, prev), totalPages));
  }, [totalPages]);

  const pageItems = useMemo<T[]>(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const setPageSize = (next: number) => {
    const n = Number(next);

    if (!Number.isFinite(n) || n < 1) return;

    setPageSizeState(n);
    setPage(1);
  };

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    total,
    totalPages,
    pageItems,
  };
}