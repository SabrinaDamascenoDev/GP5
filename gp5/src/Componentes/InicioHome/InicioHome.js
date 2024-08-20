import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./inicio.css";

//imagens
import coracao from "../../imagens/coracaozinho.svg";
import logo from "../../imagens/logo.svg";
import baixo from "../../imagens/parteBaixoInicio.svg";

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
              <Nav.Link href="#" className="mx-3">
                Objetivo
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                Equipe
              </Nav.Link>
              <Nav.Link href="#" className="mx-3">
                Acessar
              </Nav.Link>
            </Nav>
            <Nav.Link href="">
              <button className="btn btnPrincipal">Entrar</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="d-flex flex-lg-row flex-column align-items-lg-start align-items-center g-5 elementosInicio">
          <div className="titulosInicio1 col-lg-5 d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start mb-5">
              <img
                src={coracao}
                alt="Coracao"
                className="mb-3 mb-lg-0 me-lg-2"
              ></img>
              <h1 className="titleInicio fs-xl-1">
                Unidas pela Inclusão na Tecnologia
              </h1>
            </div>
            <p className="mt-3">
              Junte-se a uma comunidade exclusiva para mulheres que estão
              moldando o futuro do mercado tecnológico. Aqui, sua voz é ouvida e
              sua presença faz a diferença.
            </p>
            <div className="botoes d-flex flex-column flex-lg-row align-items-center align-items-lg-start g-4 mt-3">
              <button className="btnPrincipal btnPrincipalDesc">
                Saiba mais
              </button>
              <button className="btnSec btnSecDesc">Discord</button>
            </div>
          </div>

          <div className="imagemInicio d-none d-lg-block col-5">
            <img src={logo} className="img-fluid" alt="Logo"></img>
          </div>
        </div>
      </div>

      <div className="imagemBaixo-container" style={{ width: "100%" }}>
        <img src={baixo} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Inicio;
