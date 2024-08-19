import { Header } from "@/components/header";
import { MenuSidebar } from "@/components/menu-sidebar";
import { api } from "@/services/api";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function AppLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authorizationToken");

  

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 401 || !token ) {
            navigate("/auth/sign-in");
          }
        }
      }
    );

    return () => api.interceptors.response.eject(interceptorId);
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-200">
      <MenuSidebar />

      <div className="flex-grow flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
