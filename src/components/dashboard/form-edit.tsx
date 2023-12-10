import { CarContext, TCarContext } from '@/context/car'
import { useContext, ContextType, Context, ChangeEvent } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom'

function FormEditCar() {
    const { car, setCar } = useContext(CarContext) as ContextType<Context<TCarContext>>

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setCar((prevCar: unknown) => ({
            ...prevCar!,
            [name]: value,
        }))
    }

    return (
        <>
            <Form method='post' action={`/dashboard/cars/${car?.id}/edit`} encType='multipart/form-data'>
                <div className='bg-white p-3 m-3'>
                    <div className='d-flex mb-4 ms-4 mb-4'>
                        <label className='col-form-label me-5'>Plate</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='plate'
                            value={car?.plate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Manufacture</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='manufacture'
                            value={car?.manufacture}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Model</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='model'
                            value={car?.model}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Rental Per Day</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            type='number'
                            name='rentPerDay'
                            value={car?.rentPerDay}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Capacity</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            type='number'
                            name='capacity'
                            value={car?.capacity}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Description</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='description'
                            value={car?.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Transmission</label>
                        <select
                            name='transmission'
                            className='form-select border-black ms-auto w-75 me-5'
                            aria-label='Default select example'>
                            <option value='Manual'>Manual</option>
                            <option value='Automanual'>Automanual</option>
                            <option value='Automatic'>Automatic</option>
                        </select>
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
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='type'
                            value={car?.type}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Year</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            type='number'
                            name='year'
                            value={car?.year}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex mb-4 ms-4'>
                        <label className='col-form-label me-5'>Options</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='options'
                            value={car?.options}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='d-flex ms-4'>
                        <label className='col-form-label me-5'>Specs</label>
                        <input
                            className='form-control border-black ms-auto w-75 me-5'
                            name='specs'
                            value={car?.specs}
                            onChange={handleInputChange}
                        />
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

export default FormEditCar
