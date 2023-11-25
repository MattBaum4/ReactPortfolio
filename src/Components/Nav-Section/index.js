import {Container, Nav, Navbar} from 'react-bootstrap'
import './index.css'
const NavSection = () => (
    <Navbar>
            <Navbar.Brand className='logo-name'>Matthew Baum</Navbar.Brand>
        <Container>
            <Nav className='me-auto' />
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>


        </Container>
    </Navbar>
)

export default NavSection