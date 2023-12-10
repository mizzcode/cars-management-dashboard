import { Context, ContextType, createContext, useEffect, useState } from 'react'
import { Car } from '@/types'
import { useNavigate } from 'react-router-dom'
import httpFetch from '@/utils/fetch'

export type TCarContext = {
    cars: Car | undefined
}
export const CarContext = createContext<ContextType<Context<TCarContext>> | null>(null)

// @ts-expect-error wrong types
const CarProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [cars, setCars] = useState<Car[] | undefined>()

    const navigate = useNavigate()
    useEffect(() => {
        async function getCar() {
            await httpFetch('cars', {}, {}, {}, false)
                .then((res) => {
                    if (!res.ok) throw new Error('Invalid token!')
                    return res.json()
                })
                .then((data) => setCars(data))
                .catch((err) => {
                    console.error(err)
                    return navigate('/login')
                })
        }
        getCar()
    }, [navigate])

    // @ts-expect-error cars
    return <CarContext.Provider value={{ cars }}>{children}</CarContext.Provider>
}

export default CarProvider
