import Inicio from "./Componentes/InicioHome/InicioHome";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PageSobre from "./Componentes/Sobre/Sobre";
import Equipe from "./Componentes/EquipeDoProjeto/equipe";
import Acesso from "./Componentes/acesso/acesso"
import Rodape from "./Componentes/Rodape/Rodape";

function App() {
  return (
    <div className="App">
      <Inicio />
      <PageSobre />
      <Equipe />
      <Acesso />
      <Rodape />
    </div>
  );
}

export default App;
