import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { Signin } from "./pages/auth/signin";
import { Signup } from "./pages/auth/signup";
import { StoreRegister } from "./pages/auth/storeRegister";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Access } from "./pages/auth/access";
import { Home } from "./pages/app/home";
import { Vacanaices } from "./pages/app/vacanaices";
import { Delivery } from "./pages/app/delivery";
import { Profile } from "./pages/app/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/vacanaices", element: <Vacanaices /> },
      { path: "/delivery", element: <Delivery /> },

      { path: "/profile", element: <Profile /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/auth/sign-in", element: <Signin /> },
      { path: "/auth/sign-up", element: <Signup /> },
      { path: "/auth/store-register", element: <StoreRegister /> },
      { path: "/auth/access", element: <Access /> },
    ],
  },
]);
