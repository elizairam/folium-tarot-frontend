import React from "react";
import Cartas from "./Cartas";
import Inicial from "./Inicial";
import Leituras from "./Leituras";
import Aleatoria from "./Aleatoria";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoveCartas from "./NoveCartas";

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
        </Switch>
      </Router>
    </>
  );
}
