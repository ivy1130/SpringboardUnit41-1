import React from "react";
import VendingMachine from './VendingMachine';
import Skittles from './Skittles';
import Coke from './Coke';
import Ramen from './Ramen';
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/skittles">
          <Skittles />
        </Route>
        <Route exact path="/coke">
          <Coke />
        </Route>
        <Route exact path="/ramen">
          <Ramen />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
