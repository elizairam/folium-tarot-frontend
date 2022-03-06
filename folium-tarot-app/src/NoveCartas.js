import React, { useState } from "react";
import deckRed from "./assets/stripy-card-red.png";
import deckGreen from "./assets/stripy-card-green.png";
import deckBlue from "./assets/stripy-card-blue.png";
import "./styles.css";

export default function NoveCartas() {
  const [cartasPassado, setCartasPassado] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
    { imgUrl: deckGreen, nome: "", significado: "" },
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartasPresente, setCartasPresente] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartasFuturo, setCartasFuturo] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
    { imgUrl: deckRed, nome: "", significado: "" },
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  const getCartas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/jogo/sortear/9/nove-cartas"
      );
      const jsonData = await response.json();
      setCartasPassado(jsonData.slice(0, 3));
      setCartasPresente(jsonData.slice(3, 6));
      setCartasFuturo(jsonData.slice(6, 9));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="texto-inicial">
      <header>
        <h1 class="titulo-pagina">
          _nove cartas
        </h1>
      </header>
      <div class="ui small images" onClick={getCartas}>
        <h2 class="ui grey header" style={{ "margin": "15px" }}>
          passado_
        </h2>
        {cartasPassado.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasPassado.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          _presente
        </h2>
        {cartasPresente.map((carta) => (
          <>
            <img src={carta.imgUrl} alt="carta" width={"90px"} />
          </>
        ))}
        {cartasPresente.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          futuro_
        </h2>
        {cartasFuturo.map((carta) => (
          <>
            <img src={carta.imgUrl} alt="carta" width={"90px"} />
          </>
        ))}
        {cartasFuturo.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}
      </div>
    </div>
  );
}
