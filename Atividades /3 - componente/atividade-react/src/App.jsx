import React, { useState } from 'react';
import './App.css';

function App() {
  let [nome, setNome] = useState("Erick");
  let [idade, setIdade] = useState(25);

  // estados para os inputs
  let [novoNome, setNovoNome] = useState("1");
  let [novaIdade, setNovaIdade] = useState("2");

  return (
    <>
      <h3>Pessoa:</h3>
      <p id="nome">{nome}</p>
      <p id="idade">{idade}</p>

      <h3>Defina os valores de pessoa:</h3>

      <input 
        type="text" 
        placeholder="nome"
        value={novoNome}
        onChange={e => setNovoNome(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="idade"
        value={novaIdade}
        onChange={e => setNovaIdade(e.target.value)}
      />
      <button onClick={() => {
        setNome(novoNome);
        setIdade(novaIdade);
        // opcional: limpar inputs depois de registrar
        setNovoNome("");
        setNovaIdade("");
      }}>
        registrar
      </button>
    </>
  )
}

export default App;
