import { Context, ContextType, createContext, useEffect, useState } from 'react'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'
import httpFetch from '../utils/fetch'

export type TUserContext = {
    user: User | undefined
}
export const UserContext = createContext<ContextType<Context<TUserContext>> | null>(null)

// @ts-expect-error wrong types
const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>()

    /**
     * note: alih-alih login mendapatkan token kemudian get profile dengan token nya tapi malah get profile dulu baru post login
     * hasilnya invalid token, maka harus 2x login atau bisa langsung ke url dashboard, dan bekerja
     */

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

    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export default UserProvider
