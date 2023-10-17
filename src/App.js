import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route />
        <Route />
        
      </Routes> */}

      <HomePage />
      <Deposit />
    </div>
  );
}

export default App;
