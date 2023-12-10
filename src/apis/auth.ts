import localforage from 'localforage'
import httpFetch from '../utils/fetch'

export async function login(email: string, password: string) {
    const token = await httpFetch(
        'users/login',
        { 'Content-Type': 'application/json' },
        {},
        {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
        }
    )
        .then((res) => {
            if (!res.ok) throw new Error('Invalid email or password!')
            return res.json()
        })
        .then((data) => {
            localforage.removeItem('token')
            localforage.setItem('token', data.token)
            return data
        })
        .catch((err) => console.error(err))

    return token
}

export async function addCar(data: FormData) {
    const car = await httpFetch(
        'cars',
        {},
        {},
        {
            method: 'POST',
            body: data,
        },
        true
    )
        .then((res) => {
            if (!res.ok) throw new Error()
            return res.json()
        })
        .then((data) => data)
        .catch((err) => console.error(err))

    return car
}

export async function deleteCar(id?: string) {
    const car = await httpFetch(
        `cars/${id}`,
        {},
        {},
        {
            method: 'DELETE',
        },
        true
    )
        .then((res) => {
            if (!res.ok) throw new Error()
            return res.json()
        })
        .then((data) => data)
        .catch((err) => console.error(err))

    return car
}

export async function editCar(id?: string, data?: FormData) {
    console.log(id)
    const car = await httpFetch(
        `cars/${id}`,
        { 'Content-Type': 'application/json' },
        {},
        {
            method: 'PATCH',
            body: JSON.stringify({
                plate: data?.get('plate'),
                manufacture: data?.get('manufacture'),
                model: data?.get('model'),
                rentPerDay: Number(data?.get('rentPerDay')),
                capacity: Number(data?.get('capacity')),
                description: data?.get('description'),
                transmission: data?.get('transmission'),
                available: Boolean(data?.get('available')),
                type: data?.get('type'),
                year: Number(data?.get('year')),
                options: data?.get('options'),
                specs: data?.get('specs'),
            }),
        },
        true
    )
        .then((res) => {
            if (!res.ok) throw new Error()
            return res.json()
        })
        .then((data) => data)
        .catch((err) => console.error(err))

    return car
}
