import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";

const DEFAULT_STALE_TIME = 1000 * 60 * 5; // 5 minutos

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});

// biome-ignore lint/style/noNonNullAssertion: <!-- This is a common pattern when we are sure that the element exists. -->
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
