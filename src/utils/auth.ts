import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { login } from '../apis/auth'

export async function loginAction({ request }: LoaderFunctionArgs) {
    try {
        const formData = await request.formData()
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const token = await login(email, password)

        if (token === undefined) throw new Error('Invalid email or password!')

        return redirect('/dashboard')
    } catch (err) {
        console.error(err)
        return redirect('/login')
    }
}
