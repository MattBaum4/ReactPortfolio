import './index.css'
import {Container, Nav, Navbar} from 'react-bootstrap'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons'
const NavSection = () => (
    <Navbar>
            <Navbar.Brand className='logo-name'>Matthew Baum</Navbar.Brand>
        <Container className='container-main'>
            <Nav className='me-auto' />
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
        </Container>
        <Container className='container-secondary'>
            <Navbar.Brand className='connect-txt'>Get Connected!</Navbar.Brand>
            <Nav.Link href='https://www.linkedin.com/in/matt-baum-497a87236/'><FontAwesomeIcon icon ={faLinkedin} size='xl'/></Nav.Link>
            <Nav.Link href='https://github.com/MattBaum4'><FontAwesomeIcon icon ={faGithub} size='xl'/></Nav.Link>
            <Nav.Link href='https://discordapp.com/users/289262881487192065'><FontAwesomeIcon icon ={faDiscord} size='xl'/></Nav.Link>

        </Container>
    </Navbar>
)

export default NavSection