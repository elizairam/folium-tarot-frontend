import React, { useState } from "react";
import deck from "./assets/stripy-card-green.png";
import "./styles.css";

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
        <h1 class="ui grey header">_aleatoria</h1>
      </header>
      <h2 class="ui blue header texto-inicial">
        <img class="imagem-inicial" src={deck} alt="verso da carta" width={"90px"} />
      </h2>
      <h4 class="texto-inicial">
        <button class="ui green button" onClick={() => setCount(count + 1)}>
          + 1 carta
        </button>
        <button class="ui olive button" onClick={() => setCount(count === 0 ? 0 : count - 1)}>
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
      <div class="ui five stackable cards">
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
