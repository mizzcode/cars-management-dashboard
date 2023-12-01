import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'

function LoginPage() {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Form method='post'>
                <div className='d-flex flex-column'>
                    <label className='mb-3'>
                        <span>Email: </span>
                        <br />
                        <input type='email' name='email' required />
                    </label>
                    <label>
                        <span>Password: </span>
                        <br />
                        <input type='password' name='password' required />
                    </label>
                    <Button className='mt-4' type='submit'>
                        Sign In
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginPage
