import React, { useState } from "react";
import deckGreen from "../assets/stripy-card-green.png";
import deckRed from "../assets/stripy-card-red.png";
import deckBlue from "../assets/stripy-card-blue.png";
import "../styles.css";

export default function Aleatoria() {
  const [cartas, setCartas] = useState([]);
  const [count, setCount] = useState(0);

  const getCartasAleatorias = async () => {
    try {
      const response = await fetch(
        `https://tarot-waite-project.herokuapp.com/cartas/jogo/sortear/${count}`
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="texto-inicial">
      <header class="texto-inicial">
        <h1 class="titulo-pagina">_aleatória</h1>
      </header>
      <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          pense em uma pergunta ou situação_
        </h2>
      <h1 class="ui blue header texto-inicial">
        <img class="imagem-inicial" src={deckGreen} alt="verso da carta"/>
        <img class="imagem-inicial carta-rotacionada" src={deckRed} alt="verso da carta"  />
        <img class="imagem-inicial carta-horizontal" src={deckBlue} alt="verso da carta" />
      </h1>
      <h4 class="texto-inicial">
        <button class="ui green button" onClick={() => setCount(count + 1)}>
          + 1 carta
        </button>
        <button class="ui red button" onClick={() => setCount(count === 0 ? 0 : count - 1)}>
          - 1 carta
        </button>
        <div class="ui input focus">
          <input
            defaultValue={0}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            name={count}
            type="number"
            style={{'margin-right': '4px', 'width': '90px'}}
          />
        </div>
        <button class="ui violet button" onClick={getCartasAleatorias}>
          Sortear
        </button>
        <div class="ui input focus"></div>

        <h2 class="ui grey header">{count} cartas para a leitura_ </h2>
      </h4>
      <div class="ui five stackable cards" style={{ margin: "10px" }}>
        {cartas.map((carta) => (
          <div class="card">
            <div class="image">
              <img src={carta.imgUrl} alt="cartas" />
            </div>
            <div class="content ui blue header">{carta.nome}</div>
            <div class="content">{carta.tipo}</div>
            <div class="description ui grey header">
              <span>{carta.significado}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
