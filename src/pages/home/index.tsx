import GettingStarted from '@/components/home/cta'
import Faq from '@/components/home/faq'
import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import Hero from '@/components/home/hero'
import OurServices from '@/components/home/ourservices'
import Testimonial from '@/components/home/testimonial'
import WhyUs from '@/components/home/whyus'

function LandingPage() {
    return (
        <>
            <Header />
            <main>
                {/* Main Section */}
                <Hero hiddenNavLink={false} />
                {/* Our Service Section */}
                <OurServices />
                {/* Why Us Section */}
                <WhyUs />
                {/* Testimonial Section */}
                <Testimonial />
                {/* Getting Started Section */}
                <GettingStarted />
                {/* Frequently Asked Question Section */}
                <Faq />
            </main>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default LandingPage
