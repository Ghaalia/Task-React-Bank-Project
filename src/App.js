import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WithDraw from "./pages/WithDraw";
import Transfer from "./pages/Transfer";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/Register" Component={Register} />
        <Route path="/Login" Component={Login} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/Deposit" Component={Deposit} />
        <Route path="/WithDraw" Component={WithDraw} />
        <Route path="/Transfer" Component={Transfer} />
      </Routes>

      {/* <Register />
      <Login />
      <HomePage />
      <Deposit />
      <WithDraw />
      <Transfer /> */}
    </div>
  );
}

export default App;
