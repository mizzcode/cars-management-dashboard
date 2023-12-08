import SearchCars from '@/components/home/cars'
import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import HeroSection from '@/components/home/hero'

function SearchCarsPage() {
    return (
        <>
            <Header />
            <HeroSection hiddenNavLink={true} />
            <SearchCars />
            <Footer />
        </>
    )
}

export default SearchCarsPage
