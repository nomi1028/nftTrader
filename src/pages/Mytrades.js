import React, { useState } from "react";
import CheckDeal from "../components/CheckDeal";
import CreateTrade from "../components/CreateTrade";
import Footer from "../components/Footer";
import WalletDetails from "../components/WalletDetails";
import WalletDetailsCard from "../components/WalletDetailsCard";

const Mytrades = ({ wallet }) => {
  console.log(wallet, "wallet");

  return (
    <div>
      <WalletDetailsCard />

      <WalletDetails wallet={wallet} />
    </div>
  );
};

export default Mytrades;
