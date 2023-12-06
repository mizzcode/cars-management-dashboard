import OffCanvas from '@/components/react-bootstrap/offcanvas'

function Header() {
    return (
        <>
            <header className='fixed-top'>
                {/* Nav Section */}
                <nav className='bg-blue navbar navbar-expand-md justify-content-center'>
                    <div className='container-fluid col-md-10'>
                        <a href='#'>
                            <div className='logo' />
                        </a>
                        <div className='mt-2 collapse navbar-collapse justify-content-end'>
                            <ul className='navbar-nav'>
                                <li className='nav-item p-3'>
                                    <a className='nav-link fw-semibold' href='#our-services'>
                                        Our Services
                                    </a>
                                </li>
                                <li className='nav-item p-3'>
                                    <a className='nav-link fw-semibold' href='#why-us'>
                                        Why Us
                                    </a>
                                </li>
                                <li className='nav-item p-3'>
                                    <a className='nav-link fw-semibold' href='#testimonial'>
                                        Testimonial
                                    </a>
                                </li>
                                <li className='nav-item p-3'>
                                    <a className='nav-link fw-semibold me-4' href='#faq'>
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                            <button className='btn btn-success p-2'>
                                <a href='#'>Register</a>
                            </button>
                        </div>
                        <OffCanvas
                            btnIcon='me-3 navbar-toggler-icon btn-offcanvas'
                            placement='end'
                            title='Binar Car Rental'
                            link1='Our Services'
                            link2='Why Us'
                            link3='Testimonial'
                            link4='FAQ'
                            link5='Register'
                        />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
