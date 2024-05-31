import { useState } from "react";

function Home() {
  const [semResposta, setSemResposta] = useState(true);
  const [aceitou, setAceitou] = useState(true);

  function handleSim() {
    setSemResposta(false);
  }

  function handleNao() {
    setSemResposta(false);
    setAceitou(false);
  }

  const inicio = () => {
    return (
      <div>
        <h1>Mariana Sandrin Garcia💕</h1>
        <p>
          É por meio desta página feia que venho aqui declarar meu amor por voce
        </p>
        <p>Voce gostaria de sair num date comigo?</p>
        <div>
          <button onClick={handleSim}>Sim</button>
          <button onClick={handleNao}>Nao</button>
        </div>
      </div>
    );
  };

  const aceitouView = () => {
    return (
      <div>
        <h1>Mariana Sandrin Garcia💕</h1>
        <p>Eu amo voce, pode escolher o restaurante</p>
      </div>
    );
  };

  const naoAceitouView = () => {
    return (
      <div>
        <h1>Mariana Sandrin Garcia💕</h1>
        <p>Nao importa, vai do mesmo jeito eu vou escolher o restaurante</p>
      </div>
    );
  };

  return semResposta ? inicio() : aceitou ? aceitouView() : naoAceitouView();
}

export default Home;
