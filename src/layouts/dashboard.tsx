import { ContextType, useContext, Context } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { UserContext, TUserContext } from '../context/user'
import TopBar from '../components/dashboard/topbar'

function DashboardPage() {
    const { user } = useContext(UserContext) as ContextType<Context<TUserContext>>

    return (
        <>
            <div className='d-flex vh-100'>
                <div className='pt-5 m-5'>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    <br />
                    <NavLink to={'/dashboard/cars'}>Cars</NavLink>
                </div>
                <div className='flex-grow-1'>
                    <div className='p-3'>
                        <TopBar
                            username={user?.name}
                            avatar={'https://s0.wp.com/wp-content/themes/a8c/gravatar-docs/assets/images/Logo.png'}
                        />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage
