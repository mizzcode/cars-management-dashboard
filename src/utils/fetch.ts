import localforage from 'localforage'
import { Headers } from '@/types'

const BACKEND_URL = import.meta.env['VITE_BACKEND_URL']

async function httpFetch(
    path: string,
    headers: Headers,
    searchParams?: Record<string, unknown>,
    options?: RequestInit,
    withToken?: boolean
): Promise<Response> {
    const url = new URL(`${BACKEND_URL}/api/v1/${path}`)

    for (const key in searchParams) {
        url.searchParams.append(key, String(searchParams[key]))
    }

    if (withToken) {
        const token = await localforage.getItem('token')
        headers.Authorization = `Bearer ${token}`
    }

    return await fetch(url, { headers, ...options })
}

export default httpFetch
