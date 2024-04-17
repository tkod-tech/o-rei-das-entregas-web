import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { Signin } from "./pages/auth/signin";

export const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/auth/sign-in", element: <Signin /> }
]);

