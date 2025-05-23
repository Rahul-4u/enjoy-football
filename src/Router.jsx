import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Campus from "./pages/Campus";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/tours",
                element:<Tours/>
            },
            {
                path: "/campus",
                element: <Campus/>
            }
        ]
    }
])