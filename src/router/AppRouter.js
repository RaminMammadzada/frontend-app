import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddPlayer from "../components/AddPlayer";
import Header from "../components/Header";
import PlayersList from "../components/PlayersList";
import PlayerDetails from "../components/PlayerDetails";
import EditPlayer from "../components/EditPlayer";
import configureStore from "../redux/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <Header />
            <div className="main-content">
              <Switch>
                <Route component={PlayersList} path="/" exact={true} />
                <Route component={AddPlayer} path="/add" exact={true} />
                <Route component={EditPlayer} path="/edit/:id" exact={true} />
                <Route
                  component={PlayerDetails}
                  path="/player/:id"
                  exact={true}
                />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </div>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
