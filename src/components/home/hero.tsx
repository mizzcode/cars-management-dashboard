import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { hero } from '@/types'

function HeroSection({ hiddenNavLink }: hero) {
    return (
        <section className='container-fluid bg-blue'>
            <div className='row row-cols-1 offset-md-1 row-cols-md-2'>
                <div className='col col-md-5 align-self-center'>
                    <h1 className='mt-5 mb-3'>Sewa &amp; Rental Mobil Terbaik di Kawasan Tegal</h1>
                    <p>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                        terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    {!hiddenNavLink && (
                        <NavLink to={'/cars'}>
                            <Button>Sewa Mobil</Button>
                        </NavLink>
                    )}
                </div>
                <div id='cover-img' className='col col-md-7'>
                    <img src='icons/img_car.png' className='w-100' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
