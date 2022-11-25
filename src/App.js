import "./App.css";
import Home from "./component/Home";
import Registeryourself from "./component/Registeryourself";
import Contactus from "./component/Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/AllHeader";
import About from "./component/About";
import Practise from "./component/Practise";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element=<Home /> />
              <Route path="/about" element=<About /> />
              <Route path="/Contactus" element=<Contactus /> />
              <Route path="/Registeryourself" element=<Registeryourself /> />
              <Route path="/Practise" element=<Practise /> />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
  );
}

export default App;
