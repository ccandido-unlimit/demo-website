import React, { useState } from 'react';
import Onramp from './components/Onramp';
import Offramp from './components/Offramp';
import './App.css'; // Importe seus estilos globais, se necessário

function App() {
  const [showOnramp, setShowOnramp] = useState(true); // Estado para controlar qual formulário mostrar

  const toggleForm = () => {
    setShowOnramp(!showOnramp); // Alterna entre os formulários
  };

  return (
    <div className="App">
      <h1>Bem-vindo ao Aplicativo de Cripto</h1>
      <div>
        <button onClick={toggleForm}>
          {showOnramp ? 'Switch to Offramp' : 'Switch to Onramp'}
        </button>
      </div>
      <div>
        {showOnramp ? <Onramp /> : <Offramp />}
      </div>
    </div>
  );
}

export default App;
