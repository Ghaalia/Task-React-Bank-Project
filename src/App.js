import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import WithDraw from "./pages/WithDraw";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Routes>
        <Route path="/Register" Component={Register} />
        <Route path="/Login" Component={Login} />
        <Route path="/" Component={HomePage} />
        <Route path="/Deposit" Component={Deposit} />
        <Route path="/WithDraw" Component={WithDraw} />
      </Routes> */}

      <HomePage />
      <Deposit />
      <WithDraw />
      <Transfer />
    </div>
  );
}

export default App;
