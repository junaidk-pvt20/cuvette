import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const LazyLayout = lazy(() => import("./layout/Index"));
const LazyDashboard = lazy(() => import("./pages/Dashboard/Index"));
const LazySkillTest = lazy(() => import("./pages/Skilltest/Index"));
const LazyInternship = lazy(() => import("./pages/Internship/Index"));

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Navigate to="/skilltest" replace />
    },
    {
        path: "/",
        element: <LazyLayout />,
        children: [
            {
                path: "/dashboard",
                element: <LazyDashboard />,
            },
            {
                path: "/skilltest",
                element: <LazySkillTest />,
            },
            {
                path: "/internship",
                element: <LazyInternship />,
            },
        ]
    }
])