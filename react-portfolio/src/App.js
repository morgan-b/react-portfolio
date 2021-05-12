import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        {/* <StoreProvider> */}
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            {/* <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} /> */}
          </Switch>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;
