import React from "react";

export default function Menu() {
  return (
    <>
      <div class="ui tabular menu ">
        <a class="item active" href="/">
          Início
        </a>
        <a class="item" href="/cartas">
          Cartas
        </a>
        <a class="item" href="/cartas/jogo">
          Leituras
        </a>
      </div>
    </>
  );
}
