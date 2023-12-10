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
            if (!res.ok) throw new Error('Forbidden!')
            return res.json()
        })
        .then((data) => data)
        .catch((err) => console.error(err))

    return car
}
