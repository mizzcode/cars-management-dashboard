/* eslint-disable @typescript-eslint/ban-ts-comment */
import Button from 'react-bootstrap/Button'
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react'

type OffCanvas = {
    btnIcon: string
    placement: string
    title: string
    link1: string
    link2: string
    link3: string
    link4: string
    link5: string
}

function OffCanvas({ btnIcon, title, link1, link2, link3, link4, link5, ...props }: OffCanvas) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Button onClick={handleShow} className={btnIcon}></Button>
            {/* @ts-expect-error */}
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li className='mb-3'>
                            <a href='#our-services' className='fw-semibold' onClick={handleClose}>
                                {link1}
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href='#why-us' className='fw-semibold' onClick={handleClose}>
                                {link2}
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href='#testimonial' className='fw-semibold' onClick={handleClose}>
                                {link3}
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href='#faq' className='fw-semibold' onClick={handleClose}>
                                {link4}
                            </a>
                        </li>
                    </ul>
                    <Button>
                        <a href='#' onClick={handleClose}>
                            {link5}
                        </a>
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas
