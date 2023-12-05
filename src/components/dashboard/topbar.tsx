import { Navbar, Nav, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
type TopBar = {
    username: string | undefined
    avatar: string
}

const TopBar = ({ username, avatar }: TopBar) => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'></Navbar.Brand>
                <Nav className='ml-auto'>
                    <Dropdown>
                        <img src={avatar} alt='User Avatar' style={{ width: '2rem', marginRight: '1rem' }} />
                        <Dropdown.Toggle className='dropdow-topbar' id='dropdown-basic'>
                            Hello, {username}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className='dropdow-topbar' href='/dashboard/logout'>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopBar
