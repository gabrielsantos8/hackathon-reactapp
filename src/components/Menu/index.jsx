import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Menu = () => {

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src="../../imgs/logo.png" width="200px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto">
                        <Nav.Link className='navitem' href="/">Home</Nav.Link>
                        <Nav.Link className='navitem' href="/cadastro">Cadastro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}