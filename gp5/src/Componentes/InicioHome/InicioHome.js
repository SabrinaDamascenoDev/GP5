import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./inicio.css";

//imagens
import coracao from "../../imagens/coracaozinho.svg";
import logo from "../../imagens/logo.svg"
import baixo from "../../imagens/parteBaixoInicio.svg"

function Inicio() {
  return (
    <div>
      <Navbar expand="sm" className="mt-2 fs-1 me-5">
        <Container>
          <Navbar.Brand className="fw-bold fs-2 mt-1">GP5.</Navbar.Brand>
          <Navbar.Toggle aria-controls="menuNavBar" />
          <Navbar.Collapse id="menuNavBar">
            <Nav className="mx-auto d-flex justify-content-center g-4 fs-5">
              <Nav.Link href="#" className="mx-3">
                Sobre
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">Objetivo</Nav.Link>
              <Nav.Link href="#" className="mx-3">Equipe</Nav.Link>
              <Nav.Link href="#" className="mx-3">Acessar</Nav.Link>
            </Nav>
            <Nav.Link href="">
              <button className="btn btnPrincipal">Entrar</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="d-flex d-inline g-5 elementosInicio"> 
        <div className="titulosInicio1 col-lg-5 d-flex ">
          <div className="d-lg-inline d-lg-flex align-items-center ">
            <img src={coracao} alt="Coracao" className="mb-5 me-2 align-items-center"></img>
            <h1 className="titleInicio fs-xl-1">Unidas pela Inclusão na Tecnologia</h1>
          </div>
          <p className="mt-3">
            Junte-se a uma comunidade exclusiva para mulheres que estão moldando
            o futuro do mercado tecnológico. Aqui, sua voz é ouvida e sua
            presença faz a diferença
          </p>
          <div className="botoes d-flex g-4 mt-3"> 
              <button className="btnPrincipal btnPrincipalDesc">Saiba mais</button>
              <button className="btnSec btnSecDesc">Discord</button>
          </div>
        </div>

        <div className="imagemInicio col-5">
            <img src={logo} className="img"></img>
        </div>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <img src={baixo} alt="" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Inicio;
