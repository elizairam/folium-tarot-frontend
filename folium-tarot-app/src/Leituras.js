import React from "react";
import leituraDasCartas from "./assets/stripy-fortune-teller.png";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Leituras() {
  const opçõesDeleituras = [
    {
      opção: "Aleatória",
      descrição:
        "Essa leitura é a mais ampla e livre. É possível escolher quantas cartas são sorteadas e não existem áreas pré-definidas",
      totalDeCartas: "Quantidade variada de cartas",
      cor: "green",
      link: "/cartas/jogo/sortear/aleatoria",
    },
    {
      opção: "Cruz Celta",
      descrição: "hdujajaghdghs",
      totalDeCartas: "5",
      cor: "teal",
      link: "/cartas",
    },
    {
      opção: "Cruz da verdade",
      descrição:
        "É sorteada um carta cada para cada tema: base ou o presente, as esperanças ou receios, o que está à favor, os desafios e uma carta final como resultado e conselho",
      totalDeCartas: "5 cartas",
      cor: "blue",
      link: "/cartas/jogo/sortear/cruz-verdade",
    },
    {
      opção: "Âncora",
      descrição:
        "Leitura apenas com cartas dos arcanos maiores. Sobre as áreas: base, amor, trabalho, tema central, futuro imediato, desejos e futuro. Recomenda-se como complementar à leitura da vida",
      totalDeCartas: "7 cartas",
      cor: "violet",
      link: "/cartas/jogo/sortear/ancora",
    },
    {
      opção: "Vida",
      descrição:
        "Método de leitura sobre as áreas em sequência: pessoal, lar, trabalho, amor e  futuro. São sorteadas 4 cartas para cada tema. No fim também é sorteada uma carta-chave como conselho",
      totalDeCartas: "21 cartas",
      cor: "pink",
      link: "/cartas/jogo/sortear/vida",
    },
    {
      opção: "Nove Cartas",
      descrição:
        "São mostrados os aspectos do passado, presente e futuro em blocos separados. Há três cartas para cada um dos temas",
      totalDeCartas: "9 cartas",
      cor: "red",
      link: "/cartas/jogo/sortear/nove-cartas",
    },
  ];

  return (
    <div>
      {opçõesDeleituras.map((opc) => (
        <div>
          <table class={`ui ${opc.cor} table`}>
            <thead>
              <tr>
                <th>Tipo de leitura</th>
                <th>Como funciona?</th>
                <th>Total de cartas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{opc.opção}</td>
                <td>{opc.descrição}</td>
                <td>{opc.totalDeCartas}</td>
                <td>
                  <Link to={opc.link}>
                    <button class={`ui ${opc.cor} button`}>Jogar</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <img
        src={leituraDasCartas}
        alt="ilustração de uma pessoa lendo cartas de tarot"
        width="200px"
      />
    </div>
  );
}
