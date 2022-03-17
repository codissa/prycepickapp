import React  from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import Posts from "./hooks/fetchdata";

import SearchAppBar from "./components/SearchAppBar/SearchAppBar";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <SearchAppBar/>
        <Posts/>

        <Switch>
          <Route exact path="/" render={() => (
              <Home   />
          )} />
            <Route  path="/Favorites" render={() => (
                <Favorites />
            )} /> />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
