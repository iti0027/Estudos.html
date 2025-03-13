import React, { useState } from 'react';
import Dado from './components/Dado';
import './App.css';

function App() {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  return (
    <div className="App">
      <Dado valor={valorDado} />
      <button onClick={rolarDado}>Rolar Dado</button>
    </div>
  );
}

export default App;