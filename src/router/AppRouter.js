import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import PlayersList from "../components/PlayersList";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" component={PlayersList} exact={true} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
