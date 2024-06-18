import React from 'react';
import { Navbar, Container, Nav, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';

export default function LinkedInNavbar() {
  return (
    <Navbar bg="white" expand="lg" className='position-absolute top-0 w-100 start-0' style={{height:'64px'}}>
      <Container className='pt-1 pb-2'>
        {/* Logo e barra di ricerca */}
        <Navbar.Brand href="#home">
          <img
            src="https://blog.waalaxy.com/wp-content/uploads/2021/01/index.png"
            alt="LinkedIn Logo"
            style={{ width: '35px' }}
          />
        </Navbar.Brand>
        <InputGroup className="d-none d-lg-flex w-25">
          <FormControl
            placeholder="Cerca"
            aria-label="Cerca"
            className='bg-light'
          />
          <InputGroup.Text>
            <i className="fas fa-search"></i>
          </InputGroup.Text>
        </InputGroup>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Link di navigazione */}
          <Nav className="m-auto">
            <Nav.Link href="#home" className="d-flex flex-column align-items-center me-4">
              <i className="fas fa-home mt-1"></i>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#network" className="d-flex flex-column align-items-center me-4">
              <i className="fas fa-user-friends mt-1"></i>
              <span>Rete</span>
            </Nav.Link>
            <Nav.Link href="#jobs" className="d-flex flex-column align-items-center me-3">
              <i className="fas fa-briefcase mt-1"></i>
              <span>Lavoro</span>
            </Nav.Link>
            <Nav.Link href="#messaging" className="d-flex flex-column align-items-center me-3">
              <i className="fas fa-comment-dots mt-1"></i>
              <span>Messaggistica</span>
            </Nav.Link>
            <Nav.Link href="#notifications" className="d-flex flex-column align-items-center me-4">
              <i className="fas fa-bell mt-1"></i>
              <span>Notifiche</span>
            </Nav.Link>
            <NavDropdown title={<span className="d-flex flex-column align-items-center"><i className="fas fa-user"></i>Tu</span>} id="nav-dropdown" className="d-flex flex-column align-items-center">
              <NavDropdown.Item href="#profile">Profilo</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
             <div className='divider ms-5'></div>
          </Nav>      

          <Nav>
            <NavDropdown title={<span className="d-flex flex-column align-items-center"><i class="bi bi-grid-3x3-gap-fill"></i>Per le aziende</span>} id="nav-dropdown-business" className="d-flex flex-column align-items-center">
              <NavDropdown.Item href="#business-profile">Profilo aziendale</NavDropdown.Item>
              <NavDropdown.Item href="#business-settings">Impostazioni aziendali</NavDropdown.Item>
            </NavDropdown>
            <div className='w-50 try'>
                Prova Premium per 0 EUR
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

