import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import httpFetch from '../utils/fetch'

interface IUser {
    id: number
    email: string
    name: string
    role: string
}

function DashboardPage() {
    const [user, setUser] = useState<IUser>()

    const navigate = useNavigate()
    useEffect(() => {
        async function getUser() {
            await httpFetch('users/profile', {}, {}, true)
                .then((res) => {
                    if (!res.ok) throw new Error('Invalid token!')
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    return setUser(data)
                })
                .catch((err) => {
                    console.error(err)
                    return navigate('/login')
                })
        }
        getUser()
    }, [navigate])

    return (
        <>
            <h1>Dashboard</h1>
            <p>{user && user.email + ' ' + user.name}</p>
            <Outlet />
        </>
    )
}

export default DashboardPage
