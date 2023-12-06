import { Context, ContextType, createContext, useEffect, useState } from 'react'
import { Car } from '@/types'
import { useNavigate } from 'react-router-dom'
import httpFetch from '@/utils/fetch'

export type TCarContext = {
    car: Car | undefined
}
export const CarContext = createContext<ContextType<Context<TCarContext>> | null>(null)

// @ts-expect-error wrong types
const CarProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [car, setCar] = useState<Car | undefined>()

    const navigate = useNavigate()
    useEffect(() => {
        async function getCar() {
            // TODO: get cars by name
            await httpFetch('cars', {}, {}, true)
                .then((res) => {
                    if (!res.ok) throw new Error('Invalid token!')
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setCar(data)
                })
                .catch((err) => {
                    console.error(err)
                    return navigate('/login')
                })
        }
        getCar()
    }, [navigate])

    return <CarContext.Provider value={{ car }}>{children}</CarContext.Provider>
}

export default CarProvider
