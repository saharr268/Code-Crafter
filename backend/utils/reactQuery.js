import { QueryClient } from "@tanstack/react-query";

import {
  CASH_TIME,
  STALE_TIME,
} from "../../frontend/src/helpers/constant/statics";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: STALE_TIME,
      cacheTime: CASH_TIME,
    },
  },
});
