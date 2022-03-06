import React from "react";
import githubLogo from "./assets/icons8-github.svg"

export default function Footer() {
  return (
  <div class="texto-inicial footer">
    <p>_folium 2022 ©</p>
    <p> feito com 🍀 por elizabet_</p>
    <p>ilustrações de <a href="https://icons8.com/illustrations/author/HxMFjfKZdNq2" style={{ 'color': '#ffbe40'}}>Rosina Gavrilash</a> em <a href="https://icons8.com/illustrations" style={{ 'color': '#ffbe40'}}>Ouch!</a></p>
    <p><a href="https://github.com/elizairam"><img src={githubLogo} alt="logo github" width={"30px"}/></a></p>
  </div>
);
}