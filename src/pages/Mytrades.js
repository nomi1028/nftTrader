import React, { useState } from "react";
import CheckDeal from "../components/CheckDeal";
import CreateTrade from "../components/CreateTrade";
import Footer from "../components/Footer";
import WalletDetails from "../components/WalletDetails";
import WalletDetailsCard from "../components/WalletDetailsCard";

const Mytrades = ({ wallet }) => {
  const [shown, setShown] = useState(true);
  console.log(shown, "wallet");

  return (
    <div>
      <WalletDetailsCard setShown={setShown} />
      {shown ? <WalletDetails wallet={wallet} /> : null}
    </div>
  );
};

export default Mytrades;
