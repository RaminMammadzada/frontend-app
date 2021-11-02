import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddPlayer from "../components/AddPlayer";
import Header from "../components/Header";
import PlayersList from "../components/PlayersList";
import EditPlayer from "../components/EditPlayer";
import useLocalStorage from "../customHooks/useLocalStorage";

const AppRouter = () => {
  const [players, setPlayers] = useLocalStorage("players", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <PlayersList
                  {...props}
                  players={players}
                  setPlayers={setPlayers}
                />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddPlayer
                  {...props}
                  players={players}
                  setPlayers={setPlayers}
                />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditPlayer
                  {...props}
                  players={players}
                  setPlayers={setPlayers}
                />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
