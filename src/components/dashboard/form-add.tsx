import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom'

function FormAddCar() {
    return (
        <>
            <Form method='post' action='/dashboard/cars/add' encType='multipart/form-data'>
                <div className='bg-white p-3 m-3'>
                    <div className='d-flex mb-4 ms-4 mb-4'>
                        <label className='col-form-label me-5'>Plate</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='plate' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Manufacture</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='manufacture' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Model</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='model' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Image</label>
                        <input className='form-control border-black ms-auto w-75 me-5' type='file' name='image' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Rental Per Day</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            type='number'
                            name='rentPerDay'
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Capacity</label>
                        <input className='form-control border-black ms-auto w-75 me-5' type='number' name='capacity' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Description</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='description' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Transmission</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='transmission' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Available</label>
                        <select
                            name='available'
                            className='form-select border-black ms-auto w-75 me-5'
                            aria-label='Default select example'>
                            <option value={1}>True</option>
                            <option value={0}>False</option>
                        </select>
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Type</label>
                        <select
                            name='type'
                            className='form-select border-black ms-auto w-75 me-5'
                            aria-label='Default select example'>
                            <option value='Manual'>Manual</option>
                            <option value='Automanual'>Automanual</option>
                            <option value='Automatic'>Automatic</option>
                        </select>
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Year</label>
                        <input className='form-control border-black ms-auto w-75 me-5' type='number' name='year' />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Options</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='options' />
                    </div>
                    <div className='d-flex ms-4'>
                        <label className='col-form-label me-5'>Specs</label>
                        <input className='form-control border-black ms-auto w-75 me-5' name='specs' />
                    </div>
                </div>
                <div className='mt-5'>
                    <Link to={'/dashboard/cars'}>
                        <Button className='cancel p-2 mx-3 fw-bold'>Cancel</Button>
                    </Link>
                    <Button className='add-car px-3 py-2 fw-bold' type='submit'>
                        Save
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default FormAddCar
