import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddPlayer from "../components/AddPlayer";
import Header from "../components/Header";
import PlayersList from "../components/PlayersList";
import EditPlayer from "../components/EditPlayer";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" component={PlayersList} exact={true} />
          <Route path="/add" component={AddPlayer} />
          <Route path="/edit/:id" component={EditPlayer} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
