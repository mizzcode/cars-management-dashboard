import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { addCar, deleteCar, editCar, login } from '@/apis/auth'

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

export async function addAction({ request }: LoaderFunctionArgs) {
    try {
        const formData = await request.formData()

        const car = await addCar(formData)

        if (car.status === 'Fail') {
            throw new Error(car)
        }

        return redirect('/dashboard/cars')
    } catch (err) {
        console.error(err)
    }
}

export async function deleteAction({ params }: LoaderFunctionArgs) {
    try {
        const car = await deleteCar(params.id)

        if (car.status === 'Fail') {
            throw new Error(car)
        }

        return redirect('/dashboard/cars')
    } catch (err) {
        console.error(err)
    }
}

export async function editAction({ request, params }: LoaderFunctionArgs) {
    try {
        const formData = await request.formData()

        console.log(formData.get('plate'))
        console.log(Number(formData.get('rentPerDay')))

        const car = await editCar(params.id, formData)

        console.log(car)

        if (!car) {
            throw new Error(car)
        }

        return redirect('/dashboard/cars')
    } catch (err) {
        console.error(err)
        return null
    }
}
