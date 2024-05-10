import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { Signin } from "./pages/auth/signin";
import { Signup } from "./pages/auth/signup";
import { StoreRegister } from "./pages/auth/storeRegister";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Access } from "./pages/auth/access";
import { Home } from "./pages/app/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/auth/sign-in", element: <Signin /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/auth/sign-up", element: <Signup /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/auth/store-register", element: <StoreRegister /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/auth/access", element: <Access /> }],
  },

  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);
