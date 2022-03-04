import React from "react";
import bolaCristal from "./assets/stripy-magic-ball.png";
import "./styles.css";

export default function Inicial() {
  return (
    <div>
      <header class="texto-inicial">
        <h1 class="ui green header">folium_</h1>
      </header>
      <h1>
        <img class="imagem-inicial" src={bolaCristal} alt="bola de cristal" />
      </h1>
      <h2 class="ui blue header texto-inicial">_mini manual de tarot✨</h2>
    </div>
  );
}
