import React from "react";
// import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div class="ui secondary pointing menu ">
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
