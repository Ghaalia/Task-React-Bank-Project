import "./App.css";
import NavBar from "./Components/NavBar";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WithDraw from "./pages/WithDraw";
import Transfer from "./pages/Transfer";
import Welcome from "./pages/Welcome";
import UserContext from "./context/UserContext";
import { checktoken } from "./api/auth";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checktoken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {user && <NavBar />}

        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/Register" Component={Register} />
          <Route path="/Login" Component={Login} />
          <Route path="/HomePage" Component={HomePage} />

          <Route path="/Deposit" Component={Deposit} />
          <Route path="/WithDraw" Component={WithDraw} />
          <Route path="/Transfer" Component={Transfer} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
