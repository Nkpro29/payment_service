import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header.js";
import Wallet from "../components/Wallet";
import Transactions from "../components/Transactions";
import { useNavigate } from "react-router-dom";

function WalletPage() {
  const { user } = useSelector((state) => state.auth);
  console.log("user==>",user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <Wallet user={user} />
        <Transactions />
      </div>
    </div>
  );
}

export default WalletPage;
