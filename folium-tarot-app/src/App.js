import React from "react";
import Cartas from "./Pages/Cartas";
import Inicial from "./Pages/Inicial";
import Leituras from "./Pages/Leituras";
import Aleatoria from "./Pages/Aleatoria";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoveCartas from "./Pages/NoveCartas";
import CruzDaVerdade from "./Pages/CruzDaVerdade";
import Vida from "./Pages/Vida";
import Ancora from "./Pages/Ancora";
import CruzCelta from "./Pages/CruzCelta";

export default function App() {
  return (
    <>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/">
            <Inicial />
          </Route>
          <Route exact path="/cartas">
            <Cartas />
          </Route>
          <Route exact path="/cartas/jogo">
            <Leituras />
          </Route>
          <Route exact path="/cartas/jogo/sortear/aleatoria">
            <Aleatoria />
          </Route>
          <Route exact path="/cartas/jogo/sortear/nove-cartas">
            <NoveCartas />
          </Route>
          <Route exact path="/cartas/jogo/sortear/cruz-verdade">
            <CruzDaVerdade />
          </Route>
          <Route exact path="/cartas/jogo/sortear/vida">
            <Vida />
          </Route>
          <Route exact path="/cartas/jogo/sortear/ancora">
            <Ancora />
          </Route>
          <Route exact path="/cartas/jogo/sortear/cruz-celta">
            <CruzCelta />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
