import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React from "react";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
