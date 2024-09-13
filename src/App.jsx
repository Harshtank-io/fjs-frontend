import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import Layout from "./LayOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="framework/:id" element={<Framework />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
