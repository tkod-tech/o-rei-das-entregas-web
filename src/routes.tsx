import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { Signin } from "./pages/auth/signin";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <AppLayout/>,
        children:  [{ path: "/", element: <Dashboard /> }]
    },
    {
        path: '/',
        element: <AuthLayout/>,
        children:  [{ path: "/auth/sign-in", element: <Signin /> }]
    }
   
]);

