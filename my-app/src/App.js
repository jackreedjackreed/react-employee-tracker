import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";


function App() {
  return (
    <Router>
      <div>
        <Welcome />
      </div>
    </Router>
  );
}

export default App;