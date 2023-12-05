import Root from '../pages/home'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login'
import { loginAction } from '../utils/auth'
import Dashboard from '../layouts/dashboard'
import CarPage from '../pages/dashboard/car'
import HomePage from '../pages/dashboard/home'
import UserProvider from '../context/user'
import Logout from '../components/dashboard/logout'

function withUserContext(element: React.ReactNode) {
    return (
        // @ts-expect-error wrong types
        <UserProvider>{element}</UserProvider>
    )
}

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
        element: withUserContext(<Dashboard />),
        children: [
            {
                path: '/dashboard',
                element: <HomePage />,
            },
            {
                path: '/dashboard/cars',
                element: <CarPage />,
            },
            {
                path: '/dashboard/logout',
                element: <Logout />,
            },
        ],
    },
])

export default router
