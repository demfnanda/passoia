// AQUI IMPORTAMOS OS ARQUIVOS
import Header from "./components/Header";
import Banner from "./components/Banner";
import Lancamentos from "./components/Lancamentos";
import Dicas from "./components/Dicas";

// Arquivo Principal
// para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula

function App(){
  
  return (
    <>
      <Header />
      <Banner />
      <Dicas />
      <Lancamentos />
    </>
  );
}

export default App;