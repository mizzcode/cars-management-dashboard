import { Context, ContextType, createContext, useEffect, useState } from 'react'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'
import httpFetch from '../utils/fetch'

export type TUserContext = {
    user: User | undefined
    saveUser: (info: User) => void
}
export const UserContext = createContext<ContextType<Context<TUserContext>> | null>(null)

// @ts-expect-error wrong types
const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>()

    const navigate = useNavigate()
    useEffect(() => {
        async function getUser() {
            await httpFetch('users/profile', {}, {}, true)
                .then((res) => {
                    if (!res.ok) throw new Error('Invalid token!')
                    return res.json()
                })
                .then((data) => setUser(data))
                .catch((err) => {
                    console.error(err)
                    return navigate('/login')
                })
        }
        getUser()
    }, [navigate])

    function saveUser(info: User) {
        setUser(info)
    }

    return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>
}

export default UserProvider
