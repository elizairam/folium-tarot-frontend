import React, { useState, useEffect } from "react";
import deck from "./assets/stripy-card-6.png";
import "./styles.css";

export default function Cartas() {
  const [cartas, setCartas] = useState([]);

  const getCartas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCartasArcanoMaior = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/tipo/arcano-maior"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCartasArcanoMenor = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/tipo/arcano-menor"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCartasPaus = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/valor/paus"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCartasEspadas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/valor/espadas"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCartasCopas = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/valor/copas"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCartasOuros = async () => {
    try {
      const response = await fetch(
        "https://tarot-waite-project.herokuapp.com/cartas/valor/ouros"
      );
      const jsonData = await response.json();
      setCartas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCartas();
  }, []);

  function labelArcanos(tipo) {
    if (tipo === "Arcano maior") {
      return "violet";
    }
    return "yellow";
  }

  function labelNaipes(valor) {
    if (valor === "Copas" || valor === "Ouros") {
      return "red";
    }
    return "black";
  }

  function iconNaipes(valor) {
    if (valor === "Espadas") {
      return "♠ Espadas";
    }
    if (valor === "Copas") {
      return "♥ Copas";
    }
    if (valor === "Paus") {
      return "♣ Paus";
    }
    if (valor === "Ouros") {
      return "♦ Ouros";
    }
    return valor;
  }

  return (
    <div>
      <h1 class="ui grey header texto-inicial"> _conheça o tarot Rider-Waite Smith</h1>
      <p class="texto-inicial">
        <img
          src={deck}
          alt="cartas com o verso ilustrado de estrela"
          width="200px"
        />
      </p>
      <p class="texto-inicial">
        <button class="ui violet button" onClick={getCartasArcanoMaior}>
          Arcano maior
        </button>
        <button class="ui yellow button" onClick={getCartasArcanoMenor}>
          Arcano menor
        </button>
        <button class="ui black button" onClick={getCartasEspadas}>
          ♠ Espadas
        </button>
        <button class="ui black button" onClick={getCartasPaus}>
          ♣ Paus
        </button>
        <button class="ui red button" onClick={getCartasCopas}>
          ♥ Copas
        </button>
        <button class="ui red button" onClick={getCartasOuros}>
          ♦ Ouros
        </button>
      </p>
      <div class="ui five stackable cards">
        {cartas.map((carta) => (
          <div class="card">
            <div class="image">
              <img src={carta.imgUrl} alt="cartas" />
            </div>
            <div class="content ui blue header">{carta.nome}</div>
            <div class="content">
              <div class={`meta ui ${labelArcanos(carta.tipo)} label`}>
                {carta.tipo}
              </div>
              <div class="description ui grey header">
                <span>{carta.significado}</span>
              </div>
              <div class={`meta ui ${labelNaipes(carta.valor)} label`}>
                {iconNaipes(carta.valor)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
