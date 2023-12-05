import Root from '../pages/home'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login'
import { loginAction } from '../utils/auth'
import Dashboard from '../layouts/dashboard'
import CarPage from '../pages/dashboard/car'
import HomePage from '../pages/dashboard/home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        action: loginAction,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <HomePage />,
            },
            {
                path: '/dashboard/cars',
                element: <CarPage />,
            },
        ],
    },
])

export default router
