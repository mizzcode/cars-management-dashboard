function Faq() {
    return (
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim?
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim?
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim?
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim?
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim?
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
