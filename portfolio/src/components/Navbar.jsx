import React, { useState } from 'react'; // Importa useState desde React

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

function CollapsibleExample() {
  const [lightMode, setLightMode] = useState(false); // Define el estado lightMode

  // Función para cambiar el modo de luz
  const cambiarModo = () => {
    setLightMode(!lightMode); // Cambia el estado lightMode
    // Aquí puedes añadir lógica adicional según el estado
    // Por ejemplo, cambiar los estilos del navbar y los elementos
    const root = document.getElementById('root');
    const container = document.getElementById('container');
    const items = document.querySelectorAll('.items');
    var contador = 0;
    items.forEach(item => {
      contador ++;
      if (contador>1){
      if (!lightMode) {
        item.style.background = '#111';
        item.style.color = '#fff';
        item.style.transition="background-color 1s";
      } else {
        item.style.background = 'white';
        item.style.color = '#4d4d4d';
        item.style.transition="background-color 1s";
      }
      }
  });
    root.style.background = !lightMode ? '#04122E' : timeOfDay();
    root.style.transition="background-color 1s";
    container.style.transition="background-color 1s";
  };

  return (
    <Navbar className="nave" collapseOnSelect expand="lg" className={lightMode ? 'navbar-dark' : 'navbar-dark'} >
      <Container>
        <Navbar.Brand href="#home">MY PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sobreMi">Sobre Mi</Nav.Link>
            <Nav.Link href="#datos" onClick={()=>{
              const datos = document.getElementById('datos');
              var cont = 0
              const intervalo = setInterval(
                () => {
                  cont ++;
                  console.log(cont);
                  if (cont>1){
                    datos.style.background = "#ffe100";
                    datos.style.color = "#202020";
                    datos.style.transition="background-color 2s";
                  }
                  if (cont>3){
                    datos.style.background = "white";
                    datos.style.color= "#202020";
                    datos.style.transition="background-color 2s";
                    clearInterval(intervalo);
                    console.log("¡Intervalo cerrado!")
                  }
                },500
              )
            }}>Datos Personales</Nav.Link>
            <NavDropdown title="Hoja de vida" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <p style={{display:'inline-block'}}>Modo claro/oscuro </p>
              <LightModeRoundedIcon sx={{marginLeft: '5px',display:'inline-block'}} onClick={cambiarModo} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
