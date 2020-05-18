import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/repository/:repository+" component={Repository} />
  </Switch>
);

// o + na rota repository indica que ele deve desconsiderar a barra vinda no nome do repostorio do git
export default Routes;
