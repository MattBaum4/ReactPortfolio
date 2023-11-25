import {Container, Nav, Navbar} from 'react-bootstrap'
import './index.css'
const NavSection = () => (
    <Navbar>
        <Container>
            <Navbar.Brand>Matt's Portfolio</Navbar.Brand>
            <Nav className='me-auto' />
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>

        </Container>
    </Navbar>
)

export default NavSection