import HomePage from '../pages/home'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login'
import { loginAction } from '../libs/auth'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        action: loginAction,
    },
])

export default router
