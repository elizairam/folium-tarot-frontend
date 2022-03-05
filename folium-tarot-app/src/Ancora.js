import React, { useState } from "react";
import deckRed from "./assets/stripy-card-red.png";
import deckGreen from "./assets/stripy-card-green.png";
import deckBlue from "./assets/stripy-card-blue.png";
import "./styles.css";

export default function Ancora() {
  const [cartaBase, setCartaBase] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartasLinha, setCartasLinha] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartasTopo, setCartasTopo] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  const [cartaFuturo, setCartaFuturo] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const getCartas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/jogo/sortear/7/ancora"
      );
      const jsonData = await response.json();
      setCartaBase(jsonData.slice(0, 1));
      setCartasLinha(jsonData.slice(1, 4));
      setCartasTopo(jsonData.slice(4, 6));
      setCartaFuturo(jsonData.slice(6, 7));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="texto-inicial">
      <header>
        <h1 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          _âncora
        </h1>
      </header>
      <div class="ui small images" onClick={getCartas}>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          1.
        </h2>
        {cartaBase.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaBase.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          2. amor / 4. tema central / 3. trabalho
        </h2>
        {cartasLinha.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasLinha.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          5. futuro imediato / 6. desejos
        </h2>
        {cartasTopo.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasTopo.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          7. futuro
        </h2>
        {cartaFuturo.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaFuturo.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}
      </div>
    </div>
  );
}
