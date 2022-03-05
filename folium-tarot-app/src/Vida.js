import React, { useState } from "react";
import deckGreen from "./assets/stripy-card-green.png";
import deckBlue from "./assets/stripy-card-blue.png";
import deckRed from "./assets/stripy-card-red.png";
import "./styles.css";

export default function Vida() {
  // pessoal
  const [cartaBasePessoal, setCartaBasePessoal] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartasPessoal, setCartasPessoal] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
    { imgUrl: deckGreen, nome: "", significado: "" },
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  // lar
  const [cartaBaseLar, setCartaBaseLar] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartasLar, setCartasLar] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  // trabalho
  const [cartaBaseTrabalho, setCartaBaseTrabalho] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  const [cartasTrabalho, setCartasTrabalho] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
    { imgUrl: deckRed, nome: "", significado: "" },
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  // amor
  const [cartaBaseAmor, setCartaBaseAmor] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  const [cartasAmor, setCartasAmor] = useState([
    { imgUrl: deckGreen, nome: "", significado: "" },
    { imgUrl: deckGreen, nome: "", significado: "" },
    { imgUrl: deckGreen, nome: "", significado: "" },
  ]);

  // futuro
  const [cartaBaseFuturo, setCartaBaseFuturo] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  const [cartasFuturo, setCartasFuturo] = useState([
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
    { imgUrl: deckBlue, nome: "", significado: "" },
  ]);

  // final
  const [cartaFinal, setCartaFinal] = useState([
    { imgUrl: deckRed, nome: "", significado: "" },
  ]);

  const getCartas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/jogo/sortear/21/vida"
      );
      const jsonData = await response.json();
      setCartaBasePessoal(jsonData.slice(0, 1));
      setCartasPessoal(jsonData.slice(1, 4));
      setCartaBaseLar(jsonData.slice(4, 5));
      setCartasLar(jsonData.slice(5, 8));
      setCartaBaseTrabalho(jsonData.slice(8, 9));
      setCartasTrabalho(jsonData.slice(9, 12));
      setCartaBaseAmor(jsonData.slice(12, 13));
      setCartasAmor(jsonData.slice(13, 16));
      setCartaBaseFuturo(jsonData.slice(16, 17));
      setCartasFuturo(jsonData.slice(17, 20));
      setCartaFinal(jsonData.slice(20, 21));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="texto-inicial">
      <header class="texto-inicial" style={{ "margin-bottom": "15px" }}>
        <h1 class="ui grey header">_vida</h1>
      </header>
      <div class="ui small images" onClick={getCartas}>
        {/* pessoal */}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          pessoal
        </h2>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          1.
        </h2>
        {cartaBasePessoal.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaBasePessoal.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          2. / 3. / 4.
        </h2>
        {cartasPessoal.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasPessoal.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        {/* lar */}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          lar
        </h2>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          5.
        </h2>
        {cartaBaseLar.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaBaseLar.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          6. / 7. / 8.
        </h2>
        {cartasLar.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasLar.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        {/* trabalho */}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          trabalho
        </h2>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          9.
        </h2>
        {cartaBaseTrabalho.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaBaseTrabalho.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          10. / 11. / 12.
        </h2>
        {cartasTrabalho.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasTrabalho.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        {/* amor */}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          amor
        </h2>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          13.
        </h2>
        {cartaBaseAmor.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaBaseAmor.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          14. / 15. / 16.
        </h2>
        {cartasAmor.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasAmor.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        {/* futuro */}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          futuro
        </h2>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          17.
        </h2>
        {cartaBaseFuturo.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaBaseFuturo.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          18. / 19. / 20.
        </h2>
        {cartasFuturo.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartasFuturo.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}

        {/* final */}
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          conselho final
        </h2>
        <h2 class="ui grey header" style={{ "margin-bottom": "15px" }}>
          21.
        </h2>
        {cartaFinal.map((carta) => (
          <>
            <img
              src={carta.imgUrl}
              alt="carta"
              width={"90px"}
              title={carta.nome}
            />
          </>
        ))}
        {cartaFinal.map((carta) => (
          <>
            <h2 class="ui blue header">{carta.nome}</h2>
            <h3 class="ui grey header">{carta.significado}</h3>
          </>
        ))}
      </div>
    </div>
  );
}
