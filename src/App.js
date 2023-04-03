import "./styles/style.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my-app" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
 