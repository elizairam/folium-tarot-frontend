import React, { useState } from "react";
import deckGreen from "./assets/stripy-card-green.png";
import deckBlue from "./assets/stripy-card-blue.png";
import deckRed from "./assets/stripy-card-red.png";
import "./styles.css";

export default function CruzCelta() {
  const [cartaBase, setCartaBase] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartasLinha, setCartasLinha] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartaInfluencia, setCartaInfluencia] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  const [cartaPassado, setCartaPassado] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartaTemores, setCartasTemores] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartaFatores, setCartaFatores] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartaEsperancas, setCartaEsperancas] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartaResultado, setCartaResultado] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const getCartas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/jogo/sortear/10/cruz-celta"
      );
      const jsonData = await response.json();
      setCartaBase(jsonData.slice(0, 1));
      setCartasLinha(jsonData.slice(1, 4));
      setCartaInfluencia(jsonData.slice(4, 5));
      setCartaPassado(jsonData.slice(5, 6));
      setCartasTemores(jsonData.slice(6, 7));
      setCartaFatores(jsonData.slice(7, 8));
      setCartaEsperancas(jsonData.slice(8, 9));
      setCartaResultado(jsonData.slice(9, 10));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="texto-inicial">
      <header class="texto-inicial" style={{ "margin-bottom": "15px" }}>
        <h1 class="titulo-pagina">_cruz celta</h1>
      </header>
      <div class="ui small images" onClick={getCartas}>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          5. pensamentos que prevalecem
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
          4. passado imediato / 1. presente / 6. futuro imediato
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
          2. influências
        </h2>
        {cartaInfluencia.map((carta) => (
          <>
            <img
              class="carta-horizontal"
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaInfluencia.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          3. perguntas passadas
        </h2>
        {cartaPassado.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaPassado.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          7. temores
        </h2>
        {cartaTemores.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaTemores.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          8. fatores ambientais
        </h2>
        {cartaFatores.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaFatores.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          9. esperanças
        </h2>
        {cartaEsperancas.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaEsperancas.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          10. resultado final
        </h2>
        {cartaResultado.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaResultado.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}
      </div>
    </div>
  );
}
