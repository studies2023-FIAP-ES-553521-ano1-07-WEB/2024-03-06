import Home from './components/Home';
import Dados from './components/Dados';
import ComponentePai from './components/ComponentePai';

function App() {
  return (
    <>
      {/* CHAMANDO O COMPONENTE HOME */}
      <Home />
      {/* CRIANDO UM PROPS */}
      <Dados nome='Fiap' email='fiap@fiap.com' />
      {/* CHAMANDO O COMPONENTE PAI */}
      <ComponentePai />
    </>
  )
}

export default App
