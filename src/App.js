import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Header";


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
            <Route exact path="/contact" component={Contact} />

          </Switch>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;
