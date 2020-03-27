import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";
import SwapiContext from "../../services/swapi-service-context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorIndicator from "../error-indicator";
import "./app.css";
const App = () => {
    const swapi = new SwapiService();
    return (
        <div className="stardb-app container">
            <BrowserRouter>
                <SwapiContext.Provider value={swapi}>
                    <Header />
                    <RandomPlanet />
                    <Switch>
                        <Route
                            path="/"
                            render={() => <h2>Welcome path STAR-DB</h2>}
                            exact
                        />
                        <Route
                            path="/people/:id?"
                            render={({ match, history }) => {
                                const { id } = match.params;
                                return (
                                    <PeoplePage
                                        selected={id}
                                        history={history}
                                    />
                                );
                            }}
                        />
                        <Route
                            path="/planets/:id?"
                            render={({ match, history }) => {
                                const { id } = match.params;
                                return (
                                    <PlanetsPage
                                        selected={id}
                                        history={history}
                                    />
                                );
                            }}
                        />
                        <Route
                            path="/starships/:id?"
                            render={({ match, history }) => {
                                const { id } = match.params;
                                return (
                                    <StarshipsPage
                                        selected={id}
                                        history={history}
                                    />
                                );
                            }}
                        />
                        <Route
                            render={() => {
                                return <ErrorIndicator />;
                            }}
                        />
                    </Switch>
                </SwapiContext.Provider>
            </BrowserRouter>
        </div>
    );
};
export default App;
