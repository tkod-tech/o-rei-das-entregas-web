import { Building, LogOut, User as UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useUser } from "@/context/UserContext";
import { signOut } from "@/api/sign-out";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function AccountMenu() {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  const { mutateAsync: logout } = useMutation({
    mutationFn: signOut,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data</div>;
  }

  async function handleSignOut() {
    try {
      await logout();
      localStorage.removeItem("authorizationToken");
      localStorage.removeItem("userId");
      navigate("/auth/sign-in");
    } catch (error) {
      toast.error("Falha na validação");
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserIcon className="w-10 h-10 dark:text-white hover:bg-muted border rounded-full p-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{user.name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-muted w-full h-0.5" />
        <DropdownMenuItem onClick={() => navigate("/profile")}>
          <Building className="mr-2 h-4 w-4" />
          <span> Perfil da loja </span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-rose-500 dark:text-rose-400"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span> Sair </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
