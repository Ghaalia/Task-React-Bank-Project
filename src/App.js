import "./App.css";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WithDraw from "./pages/WithDraw";
import Transfer from "./pages/Transfer";
import Welcome from "./pages/Welcome";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {/* NavBar change */}
        {user && <NavBar />}

        <Routes>
          {/* Lianne design */}
          <Route path="/" Component={Welcome} /> {/* DONE */}
          <Route path="/Register" Component={Register} />
          <Route path="/Login" Component={Login} />
          <Route path="/HomePage" Component={HomePage} /> {/* Almost DONE :)*/}
          {/* Ghaalia design */}
          <Route path="/Deposit" Component={Deposit} /> {/* DONE */}
          <Route path="/WithDraw" Component={WithDraw} /> {/* DONE */}
          <Route path="/Transfer" Component={Transfer} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
