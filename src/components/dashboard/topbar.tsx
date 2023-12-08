import { Navbar, Nav, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { IoLogOut } from 'react-icons/io5'

type TopBar = {
    username: string | undefined
    avatar: string
}

const TopBar = ({ username, avatar }: TopBar) => {
    return (
        <Navbar bg='white' expand='lg' className='shadow-sm rounded topbar'>
            <Container>
                <Navbar.Brand href='#home'></Navbar.Brand>
                <Nav>
                    <Dropdown>
                        <img src={avatar} alt='User Avatar' style={{ width: '2rem', marginRight: '1rem' }} />
                        <Dropdown.Toggle className='dropdow-topbar' id='dropdown-basic'>
                            Hello, {username}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className='dropdow-topbar' href='/dashboard/logout'>
                                <div className='d-flex align-items-center'>
                                    <IoLogOut />
                                    <div className='ms-2'>Logout</div>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopBar
