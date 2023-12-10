import { CarContext, TCarContext } from '@/context/car'
import { useContext, ContextType, Context } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function CarPage() {
    const { cars } = useContext(CarContext) as ContextType<Context<TCarContext>>

    function rupiah(number: number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(number)
    }

    return (
        <>
            <div>
                <h1>List Cars</h1>

                <div className='new-car'>
                    <NavLink to={'/dashboard/cars/add'}>
                        <Button className='add-car'>
                            <i className='fi-plus'></i>Add New Car
                        </Button>
                    </NavLink>
                </div>

                {!cars && <h3 className='text-center'>Loading... or refresh the page</h3>}

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start'>
                    {/* @ts-expect-error map  */}
                    {cars?.map((car) => (
                        <div className='col mb-4' key={car.id}>
                            <div className='card h-100 p-2'>
                                <div className='card-body'>
                                    <div className='car'>
                                        <img src={car.image} alt='Car' width='100%' />
                                        <h6 className='mt-4'>{car.type}</h6>
                                        <h5 className='my-3'>{rupiah(car.rentPerDay)} / hari</h5>
                                        <p>{car.description}</p>
                                        <p>
                                            <i className='fi-users' /> {car.capacity} orang
                                        </p>
                                        <p>
                                            <i className='fi-settings' /> {car.transmission}
                                        </p>
                                        <p>
                                            <i className='fi-calendar' /> Tahun {car.year}
                                        </p>
                                    </div>
                                </div>
                                <Form
                                    method='post'
                                    action={`${car.id}/delete`}
                                    onSubmit={(event) => {
                                        if (!confirm('Please confirm you want to delete this record.')) {
                                            event.preventDefault()
                                        }
                                    }}>
                                    <Button className='delete mb-3 fw-bold me-4' style={{ width: '40%' }} type='submit'>
                                        <i className='fi-trash'></i>Delete
                                    </Button>
                                </Form>

                                <NavLink to={`/dashboard/cars/${car.id}/edit`}>
                                    <Button className='edit mb-3 fw-bold' style={{ width: '40%' }}>
                                        <i className='fi-edit'></i>Edit
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarPage
