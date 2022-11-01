import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";

import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer";
import Mytrades from "./pages/Mytrades";
import { Route, Routes } from "react-router-dom";
import Nav1 from "./components/nav/Index";
import AboutUs from "./components/NavMoreDropowns/AboutUs";
import Faqpage from "./components/NavMoreDropowns/Faqpage";
import GlobalDeals from "./components/NavTradingcenterDropDowns/GlobalDeals";
import HowtoTrade from "./components/NavTradingcenterDropDowns/HowtoTrade";
import TradSquardNFT from "./components/NavTradingcenterDropDowns/TradSquardNFT";
import YourHubandTrades from "./components/NavTradingcenterDropDowns/YourHubandTrades";

function App() {
  const [dis, setDis] = useState(true);

  function getLibrary(provider) {
    return new Web3(provider);
  }
  console.log(dis);
  // useEffect(() => {
  //   if (account) {
  //     setWallet(true);
  //   }
  // }, []);

  // console.log(account, "account");

  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        {/* <Navbar connectWallet={connectWallet} /> */}
        {dis ? <Nav1 /> : ""}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mytrades" element={<Mytrades setDis={setDis} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<Faqpage />} />
          <Route path="/globaldeals" element={<GlobalDeals />} />
          <Route path="/how-to-trade" element={<HowtoTrade />} />
          <Route path="/tradesquads" element={<TradSquardNFT />} />
          <Route path="/mytrades" element={<YourHubandTrades />} />
        </Routes>
        {dis ? <Footer /> : ""}
      </Web3ReactProvider>
    </div>
  );
}

export default App;
