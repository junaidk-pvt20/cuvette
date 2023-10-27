import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const LazyLayout = lazy(() => import("./layout/Index"));
const LazyDashboard = lazy(() => import("./pages/dashboard/Index.jsx"));
const LazySkillTest = lazy(() => import("./pages/skilltest/Index.jsx"));
const LazyInternship = lazy(() => import("./pages/internship/Index.jsx"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/skilltest" replace />
    },
    {
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