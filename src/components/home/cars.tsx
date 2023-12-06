function SearchCars() {
    return (
        <>
            <section id='jumbotron' className='container-fluid bg-blue'>
                <section id='search' className='container-fluid shadow-lg col-md-9 rounded-4 bg-white'>
                    <form id='searchCar' className='row p-4' method='get'>
                        <div className='col-auto me-2'>
                            <label>Tipe Driver</label>
                            <select id='driver' name='driver' className='form-select' required={true}>
                                <option selected={true} disabled={true}>
                                    Pilih Tipe Driver
                                </option>
                                <option value={1}>Dengan Sopir</option>
                                <option value={0}>Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className='col-auto me-2'>
                            <label>Tanggal</label>
                            <input className='row p-1' type='date' name='date' id='date' required={true} />
                        </div>
                        <div className='col-auto me-2'>
                            <label>Waktu Jemput/Ambil</label>
                            <select className='form-select' name='pickupTime' id='pickupTime' required={true}>
                                <option selected={true} disabled={true}>
                                    Pilih Waktu
                                </option>
                                <option value='T01:00:00Z'>08:00 WIB</option>
                                <option value='T02:00:00Z'>09:00 WIB</option>
                                <option value='T03:00:00Z'>10:00 WIB</option>
                                <option value='T04:00:00Z'>11:00 WIB</option>
                                <option value='T05:00:00Z'>12:00 WIB</option>
                            </select>
                        </div>
                        <div className='col-auto me-2'>
                            <label>Jumlah Penumpang</label>
                            <input
                                className='row p-1'
                                type='number'
                                name='totalPassenger'
                                id='totalPassenger'
                                placeholder='Jumlah Penumpang'
                                required={true}
                            />
                        </div>
                        <div className='col-auto d-flex align-items-end'>
                            <button id='cariMobil' className='btn btn-success' disabled={true}>
                                Cari Mobil
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}

export default SearchCars
