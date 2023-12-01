import { LoaderFunctionArgs } from 'react-router-dom'

export async function loginAction({ request }: LoaderFunctionArgs) {
    const formData = await request.formData()

    const email = formData.get('email')
    const password = formData.get('password')

    fetch('http://localhost:4000/api/v1/users/login', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
}
