import { Context, ContextType, createContext, useEffect, useState } from 'react'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'
import httpFetch from '../utils/fetch'
import CarProvider from './car'

export type TUserContext = {
    user: User | undefined
}
export const UserContext = createContext<ContextType<Context<TUserContext>> | null>(null)

// @ts-expect-error wrong types
const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>()

    /**
     * note: gak tau kenapa user pertama kali login itu malah ditolak padahal token udah masuk, jadinya malah redirect ke login lagi,
     * tapi bisa ke dashboard jika udah pertama kali login, hanya saja pas pertama kali login itu dia ditolak
     */

    const navigate = useNavigate()
    useEffect(() => {
        async function getUser() {
            await httpFetch('users/profile', {}, {}, {}, true)
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

    return (
        <UserContext.Provider value={{ user }}>
            {/* @ts-expect-error wrong types */}
            <CarProvider>{children}</CarProvider>
        </UserContext.Provider>
    )
}

export default UserProvider
