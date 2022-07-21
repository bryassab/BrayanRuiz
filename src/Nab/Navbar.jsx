import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPager, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import '../Nab/NAvbar.css'
import Pdf from '../pages/Brayan Ruiz Hv..pdf';

export default function NAvbar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Inicio</Nav.Link>
                        <Nav.Link href="#About">Sobre Mi</Nav.Link>
                        <Nav.Link href="#Conocimientos">Conocimientos</Nav.Link>
                        <Nav.Link href="#Proyectos">Proyectos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand>CV</Navbar.Brand>
                        <ul className='iiconss'>
                            <li><a href='https://docdro.id/gIGmx9W' target='_blank'><FontAwesomeIcon icon={faFilePdf} /></a> </li>
                        </ul>
                    </Nav>
                    <Nav>

                        <Navbar.Brand>Contacto</Navbar.Brand>
                        <ul className='iconss'>
                            <li><a href='https://www.linkedin.com/in/brayan-ruiz-09b184233/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a> </li>
                            <li><a href='https://wa.link/cq718h' target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a> </li>
                            <li><a href="https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSBmlxrrNJNCmvckPqptNwRSKfmXmzHklmKgtJGzkchDZzPGhGVdgvQvKPzXhdJQRcPQzvCT" target='_blank'><FontAwesomeIcon icon={faEnvelope} /></a> </li>
                        </ul></Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

