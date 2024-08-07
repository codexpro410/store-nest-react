import { useEffect, useState } from "react";

/**
 * the purpose of this hook is get current position with live scrolling
 */
export function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
}

/**
 *
 */

// export type PaginationProps = {
//   totalCount: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
//   pageSize: number;
//   siblingCount?: number;
//   className?: string;
// };
// export function usePagination({}: PaginationProps) {}
