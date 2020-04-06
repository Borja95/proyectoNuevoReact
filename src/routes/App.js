import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../pages/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Index} exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
