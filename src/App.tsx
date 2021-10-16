/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import History from "./views/History/History";
import Hire from "./views/Hire/Hire";
import FullstackDeveloper from "./views/FullstackDeveloper/FullstackDeveloper";
import NotFound from "./views/NotFound/NotFound";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
        <Route exact path="/hire" component={Hire} />
        <Route
          exact
          path="/fullstack-developer"
          component={FullstackDeveloper}
        />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
