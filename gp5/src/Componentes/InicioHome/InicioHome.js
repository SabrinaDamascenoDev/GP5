
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './inicio.css'


function Inicio() {
    return (
      <div className="container">
          <header>
              <nav className="navbar navbar-expand-sm mt-2 fs-1">
                  <h1 className='navbar-brand fw-bold'>GP5.</h1>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavBar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menuNavBar">
                  <div class="navbar-nav fs-5 ms-5 g-5 aling-items-center mx-auto d-flex justify-content-center">
                      <a href="#" class="nav-link active">Sobre</a>
                      <a href="#" class="nav-link">Objetivo</a>
                      <a href="#" class="nav-link">Equipe</a>
                      <a href="#" class="nav-link">Acessar</a>
                  </div>
                </div>

              </nav>
          </header>
      </div>
    );
  }
  
  export default Inicio;
  