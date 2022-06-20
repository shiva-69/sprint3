import "./App.css";
import React from "react"; 
import Navbar from "./components/Navbar";
import{Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {AuthContext} from "./context/AuthContext"

function App() {
  const {isAuth} = React.useContext(AuthContext);

  return <div className="App">
    <Navbar/>

    <Routes>
      {
        isAuth ? <Route path="/" element={<Home/>}></Route> : <Route path="/" element={<Login/>}></Route>
      }
    </Routes>
    </div>;
}

export default App;
