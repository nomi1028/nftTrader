import { Nav } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import Web3 from "web3";

import { Web3ReactProvider } from "@web3-react/core";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer";
import Mytrades from "./pages/Mytrades";
import { Route, Routes } from "react-router-dom";
import Nav1 from "./components/nav/Index";
function App() {
  const [wallet, setWallet] = useState(false);

  function getLibrary(provider) {
    return new Web3(provider);
  }
  const connectWallet = () => {
    setWallet(!wallet);
  };

  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        {/* <Navbar connectWallet={connectWallet} /> */}
        <Nav1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mytrades" element={<Mytrades wallet={wallet} />} />
        </Routes>
        <Footer />
      </Web3ReactProvider>
    </div>
  );
}

export default App;
