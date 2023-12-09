import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/bundle'

function Testimonial() {
    return (
        <section id='testimonial' className='text-center px-md-0'>
            <h2>Testimonial</h2>
            <p className='mb-5'>Berbagai review positif dari pelanggan kami</p>
            <Swiper
                loop={true}
                autoplay={true}
                slidesPerView={1}
                spaceBetween={0}
                centeredSlides={true}
                navigation={{
                    prevEl: '.prev-button',
                    nextEl: '.next-button',
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}>
                <SwiperSlide className='p-5 testimony bg-blue'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='rater-img'>
                            <img src='icons/rater_1.png' className='w-50' />
                        </div>
                        <div className='rater-text text-start'>
                            <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <p className='fw-bold'>John Dee 31, Bromo</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-5 testimony bg-blue'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='rater-img'>
                            <img src='icons/rater_2.png' className='w-50' />
                        </div>
                        <div className='rater-text text-start'>
                            <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <p className='fw-bold'>John Dee 32, Bromo</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-5 testimony bg-blue'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='rater-img'>
                            <img src='icons/rater_1.png' className='w-50' />
                        </div>
                        <div className='rater-text text-start'>
                            <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <p className='fw-bold'>John Dee 33, Bromo</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-5 testimony bg-blue'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='rater-img'>
                            <img src='icons/rater_2.png' className='w-50' />
                        </div>
                        <div className='rater-text text-start'>
                            <img src='icons/Rate.png' className='d-block m-auto ms-md-0 mb-3' />
                            <p>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <p className='fw-bold'>John Dee 34, Bromo</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <button className='prev-button'>&lt;</button>
            <button className='next-button'>&gt;</button>
        </section>
    )
}

export default Testimonial
