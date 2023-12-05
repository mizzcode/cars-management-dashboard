import localforage from 'localforage'
import httpFetch from '../utils/fetch'

export async function login(email: string, password: string) {
    const token = await httpFetch(
        'users/login',
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
