import { Context, ContextType, createContext, useEffect, useState } from 'react'
import { Car } from '@/types'
import { useNavigate } from 'react-router-dom'
import httpFetch from '@/utils/fetch'
import { useParams } from 'react-router-dom'

export type TCarContext = {
    cars: Car | undefined
    car: Car | undefined
    setCar: (prevCar: unknown) => Car | Car
}
export const CarContext = createContext<ContextType<Context<TCarContext>> | null>(null)

// @ts-expect-error wrong types
const CarProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [cars, setCars] = useState<Car[] | undefined>()
    const [car, setCar] = useState<Car[] | undefined>()

    const { id } = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        async function getCar() {
            await httpFetch('cars', {}, {}, {}, false)
                .then((res) => {
                    if (!res.ok) throw new Error()
                    return res.json()
                })
                .then((data) => setCars(data))
                .catch((err) => console.error(err))
        }
        getCar()
    }, [navigate])

    useEffect(() => {
        async function getCar() {
            await httpFetch(`cars/${id}`, {}, {}, {}, true)
                .then((res) => {
                    if (!res.ok) throw new Error()
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setCar(data)
                })
                .catch((err) => console.error(err))
        }
        getCar()
    }, [id])

    // @ts-expect-error cars
    return <CarContext.Provider value={{ cars, car, setCar }}>{children}</CarContext.Provider>
}

export default CarProvider
