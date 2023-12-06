import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { hero } from '@/types'

function HeroSection({ title, content, hiddenNavLink, imageUrl }: hero) {
    return (
        <>
            <div className='row row-cols-1 offset-md-1 row-cols-md-2'>
                <div className='col col-md-5 align-self-center'>
                    <h1 className='mt-5 mb-3'>{title}</h1>
                    <p>{content}</p>
                    {!hiddenNavLink && (
                        <NavLink to={'/cars'}>
                            <Button>Sewa Mobil</Button>
                        </NavLink>
                    )}
                </div>
                <div id='cover-img' className='col col-md-7'>
                    <img src={imageUrl} className='w-100' />
                </div>
            </div>
        </>
    )
}

export default HeroSection
