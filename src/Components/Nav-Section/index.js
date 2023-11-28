import './index.css'
import {Container, Nav, Navbar} from 'react-bootstrap'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const NavSection = () => (
    <Navbar>
            <Navbar.Brand className='logo-name'>Portfolio Project</Navbar.Brand>
        <Container className='container-main'>
            <Nav className='me-auto' />
            <Link to='/'>Home</Link>
            <Link to='/about'>About Me</Link>
            <Link to='/contact'>Contact</Link>
        </Container>
        <Container className='container-secondary'>
            <Navbar.Brand className='connect-txt'>Get Connected!</Navbar.Brand>
            <Nav.Link target="_blank" href='https://www.linkedin.com/in/matt-baum-497a87236/'><FontAwesomeIcon icon ={faLinkedin} size='xl'/></Nav.Link>
            <Nav.Link target="_blank" href='https://github.com/MattBaum4'><FontAwesomeIcon icon ={faGithub} size='xl'/></Nav.Link>
            <Nav.Link target="_blank" href='https://discordapp.com/users/289262881487192065'><FontAwesomeIcon icon ={faDiscord} size='xl'/></Nav.Link>

        </Container>
    </Navbar>
)

export default NavSection