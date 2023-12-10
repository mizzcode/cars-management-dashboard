import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'

function FormLogin() {
    return (
        <>
            <Form method='post' action='/login'>
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
        </>
    )
}

export default FormLogin
