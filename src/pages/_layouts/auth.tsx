import { Outlet } from "react-router-dom";
import {Bike} from "lucide-react";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-[url('/img/containerLogo.svg')] bg-cover bg-no-repeat bg-center h-64 w-full p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium">
            <Bike color="#fff"/>
            <span className="font-semibold text-white">O Rei das Entregas.</span>
        </div>
        <footer className="text-sm text-white">
          Painel do parceiro &copy; O Rei das Entregas -{" "}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
