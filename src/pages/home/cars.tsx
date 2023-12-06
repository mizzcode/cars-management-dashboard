import SearchCars from '@/components/home/cars'
import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import HeroSection from '@/components/home/hero'

function SearchCarsPage() {
    return (
        <>
            <Header />
            <main>
                <section className='container-fluid bg-blue'>
                    <HeroSection
                        title='Sewa &amp; Rental Mobil Terbaik di Kawasan Tegal'
                        content='Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                        terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.'
                        hiddenNavLink={true}
                        imageUrl='icons/img_car.png'
                    />
                </section>
            </main>
            <SearchCars />
            <Footer />
        </>
    )
}

export default SearchCarsPage
