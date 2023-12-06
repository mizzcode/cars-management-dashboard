function Footer() {
    return (
        <>
            <footer className='container-fluid col-md-10'>
                <div className='row row-cols-1'>
                    <div className='col col-md-4 mb-3 d-flex flex-column'>
                        <p className='my-2'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p className='my-2'>binarcarrental@gmail.com</p>
                        <p className='my-2'>081-233-334-808</p>
                    </div>
                    <div className='col col-md-2 mb-3 d-flex flex-column fw-semibold'>
                        <a className='my-2' href='#our-services'>
                            Our Services
                        </a>
                        <a className='my-2' href='#why-us'>
                            Why Us
                        </a>
                        <a className='my-2' href='#testimonial'>
                            Testimonial
                        </a>
                        <a className='my-2' href='#faq'>
                            FAQ
                        </a>
                    </div>
                    <div className='col col-md-3 mb-3 d-flex flex-column'>
                        <p className='my-2'>Connect with us</p>
                        <div className='media-social'>
                            <a href='#'>
                                <img src='icons/icon_facebook.png' className='my-2 mx-1' />
                            </a>
                            <a href='#'>
                                <img src='icons/icon_instagram.png' className='my-2 mx-1' />
                            </a>
                            <a href='#'>
                                <img src='icons/icon_twitter.png' className='my-2 mx-1' />
                            </a>
                            <a href='#'>
                                <img src='icons/icon_mail.png' className='my-2 mx-1' />
                            </a>
                            <a href='#'>
                                <img src='icons/icon_twitch.png' className='my-2 mx-1' />
                            </a>
                        </div>
                    </div>
                    <div className='col col-md-3 mb-3 d-flex flex-column'>
                        <p className='my-2'>Copyright Binar 2022</p>
                        <a href='#'>
                            <div className='logo mt-2' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
