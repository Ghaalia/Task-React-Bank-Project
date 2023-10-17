import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route />
        <Route />
        
      </Routes> */}
      <Register />
      <Login />
      <HomePage />
      <Deposit />
    </div>
  );
}

export default App;
