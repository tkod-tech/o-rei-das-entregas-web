import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./global.css";
import { Toaster } from "sonner";
import { router } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { ThemeProvider } from "./components/theme/theme-provider";
import { UserProvider } from "./context/UserContext";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="theme rei-das-entrgas" defaultTheme="dark">
        <Helmet titleTemplate="%s | REI" />
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
