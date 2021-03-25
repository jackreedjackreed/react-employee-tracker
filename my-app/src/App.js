import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./components/Directory";
import './tailwind.output.css';



function App() {
  return (
    <Router>
      <div>
        <Directory />
      </div>
    </Router>
  );
}

export default App;