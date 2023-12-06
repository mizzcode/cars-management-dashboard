import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import HeroSection from '@/components/home/hero'

function LandingPage() {
    return (
        <>
            <Header />
            <main>
                {/* Main Section */}
                <section className='container-fluid bg-blue'>
                    <HeroSection
                        title='Sewa &amp; Rental Mobil Terbaik di Kawasan Tegal'
                        content='Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                        terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.'
                        hiddenNavLink={false}
                        imageUrl='icons/img_car.png'
                    />
                </section>
                {/* Our Service Section */}
                <section id='our-services' className='container-fluid'>
                    <div className='row row-cols-1 row-cols-md-2 justify-content-center'>
                        <div className='our-service-img col col-md-5 text-center'>
                            <img src='icons/img_service.png' className='w-75' />
                        </div>
                        <div className='col col-md-5 align-self-center'>
                            <h2 className='mt-5 mb-3'>Best Car Rental for any kind of trip in Tegal</h2>
                            <p>
                                Sewa mobil di Tegal bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                                lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
                                bisnis, wedding, meeting, dll.
                            </p>
                            <ul>
                                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                <li>Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Why Us Section */}
                <section id='why-us' className='container-fluid col-md-10 text-center text-md-start'>
                    <h2 className='mt-5'>Why Us?</h2>
                    <p className='mb-5'>Mengapa harus pilih Binar Car Rental?</p>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-start'>
                        <div className='col'>
                            <div className='card h-100 p-2'>
                                <div className='card-body'>
                                    <img src='icons/icon_complete.png' className='p-2' />
                                    <h4 className='card-title p-2'>Mobil Lengkap</h4>
                                    <p className='card-text p-2'>
                                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100 p-2'>
                                <div className='card-body'>
                                    <img src='icons/icon_price.png' className='p-2' />
                                    <h4 className='card-title p-2'>Harga Murah</h4>
                                    <p className='card-text p-2'>
                                        Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100 p-2'>
                                <div className='card-body'>
                                    <img src='icons/icon_24hrs.png' className='p-2' />
                                    <h4 className='card-title p-2'>Layanan 24 Jam</h4>
                                    <p className='card-text p-2'>
                                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                                        minggu
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100 p-2'>
                                <div className='card-body'>
                                    <img src='icons/icon_professional.png' className='p-2' />
                                    <h4 className='card-title p-2'>Sopir Profesional</h4>
                                    <p className='card-text p-2'>
                                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonial Section */}
                <section id='testimonial' className='text-center px-md-0'>
                    <h2>Testimonial</h2>
                    <p className='mb-5'>Berbagai review positif dari pelanggan kami</p>
                    <div className='swiper carousel'>
                        <div className='swiper-wrapper'>
                            <div className='swiper-slide p-5 bg-blue carousel-item'>
                                <div className='d-flex flex-column flex-md-row'>
                                    <div className='rater-img'>
                                        <img src='icons/rater_1.png' />
                                    </div>
                                    <div className='rater-text text-start'>
                                        <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p className='fw-bold'>John Dee 31, Bromo</p>
                                    </div>
                                </div>
                            </div>
                            <div className='swiper-slide p-5 bg-blue carousel-item'>
                                <div className='d-flex flex-column flex-md-row'>
                                    <div className='rater-img'>
                                        <img src='icons/rater_2.png' />
                                    </div>
                                    <div className='rater-text text-start'>
                                        <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p className='fw-bold'>John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                            <div className='swiper-slide p-5 bg-blue carousel-item'>
                                <div className='d-flex flex-column flex-md-row'>
                                    <div className='rater-img'>
                                        <img src='icons/rater_1.png' />
                                    </div>
                                    <div className='rater-text text-start'>
                                        <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p className='fw-bold'>John Dee 33, Bromo</p>
                                    </div>
                                </div>
                            </div>
                            <div className='swiper-slide p-5 bg-blue carousel-item'>
                                <div className='d-flex flex-column flex-md-row'>
                                    <div className='rater-img'>
                                        <img src='icons/rater_2.png' />
                                    </div>
                                    <div className='rater-text text-start'>
                                        <img src='icons/Rate.png' className='d-block m-auto mb-3' />
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p className='fw-bold'>John Dee 34, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='prev-button'>&lt;</button>
                    <button className='next-button'>&gt;</button>
                </section>
                {/* Getting Started Section */}
                <section className='container-fluid col-md-10 text-center my-5'>
                    <div id='getting-started' className='p-5'>
                        <h2>Sewa Mobil di Tegal Sekarang</h2>
                        <p className='mb-5 col-md-6 offset-md-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <button className='btn btn-success'>
                            <a href='/cars'>Mulai Sewa Mobil</a>
                        </button>
                    </div>
                </section>
                {/* Frequently Asked Question Section */}
                <section id='faq'>
                    <div className='container-fluid col-md-10'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <h4>Frequently Asked Question</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className='col-md-7'>
                                <div className='accordion' id='accordionExample'>
                                    <div className='accordion-item'>
                                        <h2 className='accordion-header' id='headingOne'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseOne'
                                                aria-expanded='false'
                                                aria-controls='collapseOne'>
                                                Apa saja syarat yang dibutuhkan?
                                            </button>
                                        </h2>
                                        <div
                                            id='collapseOne'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingOne'
                                            data-bs-parent='#accordionExample'>
                                            <div className='accordion-body'>
                                                <strong>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis, enim?
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='accordion-item'>
                                        <h2 className='accordion-header' id='headingTwo'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseTwo'
                                                aria-expanded='false'
                                                aria-controls='collapseTwo'>
                                                Berapa hari minimal sewa mobil lepas kunci?
                                            </button>
                                        </h2>
                                        <div
                                            id='collapseTwo'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingTwo'
                                            data-bs-parent='#accordionExample'>
                                            <div className='accordion-body'>
                                                <strong>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis, enim?
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='accordion-item'>
                                        <h2 className='accordion-header' id='headingThree'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseThree'
                                                aria-expanded='false'
                                                aria-controls='collapseThree'>
                                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                            </button>
                                        </h2>
                                        <div
                                            id='collapseThree'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingThree'
                                            data-bs-parent='#accordionExample'>
                                            <div className='accordion-body'>
                                                <strong>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis, enim?
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='accordion-item'>
                                        <h2 className='accordion-header' id='headingFour'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseFour'
                                                aria-expanded='false'
                                                aria-controls='collapseFour'>
                                                Apakah Ada biaya antar-jemput?
                                            </button>
                                        </h2>
                                        <div
                                            id='collapseFour'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingFour'
                                            data-bs-parent='#accordionExample'>
                                            <div className='accordion-body'>
                                                <strong>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis, enim?
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='accordion-item'>
                                        <h2 className='accordion-header' id='headingFive'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseFive'
                                                aria-expanded='false'
                                                aria-controls='collapseFive'>
                                                Bagaimana jika terjadi kecelakaan
                                            </button>
                                        </h2>
                                        <div
                                            id='collapseFive'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingFive'
                                            data-bs-parent='#accordionExample'>
                                            <div className='accordion-body'>
                                                <strong>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis, enim?
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default LandingPage
