/* eslint-disable @typescript-eslint/ban-ts-comment */
import Button from 'react-bootstrap/Button'
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react'

type OffCanvas = {
    btnIcon: string
    placement: string
}

function OffCanvas({ btnIcon, ...props }: OffCanvas) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Button onClick={handleShow} className={btnIcon}></Button>
            {/* @ts-expect-error */}
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Binar Car Rental</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li className='mb-3'>
                            <a href='#our-services' className='fw-semibold' onClick={handleClose}>
                                Our Services
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href='#why-us' className='fw-semibold' onClick={handleClose}>
                                Why Us
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href='#testimonial' className='fw-semibold' onClick={handleClose}>
                                Testimonial
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href='#faq' className='fw-semibold' onClick={handleClose}>
                                FAQ
                            </a>
                        </li>
                    </ul>
                    <Button>
                        <a href='#' onClick={handleClose}>
                            Register
                        </a>
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas
