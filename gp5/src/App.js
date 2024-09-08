import Inicio from "./Componentes/InicioHome/InicioHome";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PageSobre from "./Componentes/Sobre/Sobre";
import Equipe from "./Componentes/EquipeDoProjeto/equipe";
import Acesso from "./Componentes/acesso/acesso"

function App() {
  return (
    <div className="App">
      <Inicio />
      <PageSobre />
      <Equipe />
      <Acesso />
    </div>
  );
}

export default App;
