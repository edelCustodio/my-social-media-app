import { Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { MainLayout } from "./components/layout/MainLayout";
import { Posts } from "./components/posts/Posts";
import { UserList } from "./components/users/UsersList";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'users', element: <UserList /> },
            { path: 'posts', element: <Posts /> },
            
            { path: '/', element: <Navigate to="/dashboard" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
]

export default routes;