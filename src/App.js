import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App;