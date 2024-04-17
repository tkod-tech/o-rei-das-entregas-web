import { Outlet } from "react-router-dom";
import {Bike} from "lucide-react";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium">
            <Bike />
            <span className="font-semibold">o rei das entregas</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy, o rei das entregas -{" "}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
