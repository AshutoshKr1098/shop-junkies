import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
