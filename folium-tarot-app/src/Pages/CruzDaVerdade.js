import React, { useState } from "react";
import deckGreen from "../assets/stripy-card-green.png";
import deckBlue from "../assets/stripy-card-blue.png";
import deckRed from "../assets/stripy-card-red.png";
import "../styles.css";

export default function CruzDaVerdade() {
  const [cartaBase, setCartaBase] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartasLinha, setCartasLinha] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartaFinal, setCartaFinal] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  const getCartas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/jogo/sortear/5/cruz-verdade"
      );
      const jsonData = await response.json();
      setCartaBase(jsonData.slice(0, 1));
      setCartasLinha(jsonData.slice(1, 4));
      setCartaFinal(jsonData.slice(4, 5));
    } catch (err) {
      console.error(err.message);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div class="texto-inicial">
      <header
        class="texto-inicial"
        style={{ "margin-bottom": "15px" }}
        onClick={refreshPage}
      >
        <h1 class="titulo-pagina">_cruz da verdade</h1>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          pense em uma pergunta ou situação e clique nas cartas_
        </h2>
      </header>
      <div class="ui small images" onClick={getCartas}>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          base ou presente
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
          <div class="significado">
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </div>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          favorável / esperanças / desafios
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
          <div class="significado">
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </div>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          resultado ou conselho final
        </h2>
        {cartaFinal.map((carta) => (
          <div class="significado">
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </div>
        ))}
        {cartaFinal.map((carta) => (
          <div class="significado">
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
