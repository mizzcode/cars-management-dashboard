function WhyUs() {
    return (
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
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
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
    )
}

export default WhyUs
