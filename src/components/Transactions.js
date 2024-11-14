import React, { useState } from "react";
import dropdown from "../assets/elements.png";

function Transactions() {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Addition", "Deduction", "Refund"];

  return (
    <>
      <div className="mt-8 mb-4 flex w-full">
        <p className="text-xl font-bold">Transactions</p>
        <p className="border border-btn-br-color rounded-full px-4 flex items-center justify-center space-x-1 text-dark-bg absolute right-4 sm:right-8 lg:right-16">
          Select Month
          <img src={dropdown} className="w-2 h-2 relative top-0.5 ml-1" />
        </p>
      </div>
      <div className="w-full mx-auto">
        <div className="flex justify-around border-b border-gray-300 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`py-2 px-4 ${
                selectedTab === tab
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-center text-gray-600">
          {selectedTab === "All" && <p>You don’t have any transactions yet.</p>}
        </div>
      </div>
    </>
  );
}

export default Transactions;
