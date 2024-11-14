import React, { useEffect, useState } from "react";
import checkmark from "../assets/checkmark-badge-01.png";
import icon from "../assets/Brand Logo Icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import emily from "../assets/Screenshot 2024-11-14 at 10.59.43 PM.png";

function Wallet({ user }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const creditOptions = [
    {
      credits: 15000,
      originalPrice: 15000,
      discountedPrice: 14500,
      discount: "30% off",
    },
    {
      credits: 15000,
      originalPrice: 15000,
      discountedPrice: 14500,
      discount: "30% off",
    },
    {
      credits: 15000,
      originalPrice: 15000,
      discountedPrice: 14500,
      discount: "30% off",
    },
  ];

  return (
    <>
      <div className="bg-white shadow rounded-xl p-4 mb-6 border-2 border-br-color h-[6rem]">
        <div className="flex items-center mb-6 ">
          <img src={emily} alt="User" className="rounded-full w-16 h-16" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{user.firstName}</h2>
            <p className="text-black-500 mt-4 text-xs">+91 8930-188-923</p>
          </div>
          <div className="relative ml-auto mb-6 bg-custom-light text-black-500 rounded-full px-1 py-1 pl-2 pr-2 text-sm flex">
            {" "}
            <img src={checkmark} className="mr-1" />
            Verified
          </div>
        </div>
      </div>
      <div className="bg-bg-color shadow rounded-xl p-4 mb-1 border-2 border-br-color">
        <h2 className="text-l font-bold mb-4">Available Credits</h2>
        <div className="flex mb-3">
          <img src={icon} className="w-8 h-8 mt-2 mr-2" />
          <h5 className="text-4xl font-semibold mt-1">0</h5>
        </div>
        <div>
          <p className="text-xs">
            Credits can be used for all bookings, food orders, events.
          </p>
        </div>
        <div className="border-t border-gray-300 my-4 w-auto h-auto"></div>
        <div className="bg-dark-bg text-black-500 rounded-full px-2 py-2 text-sm w-40 h-30">
          <button className="mx-auto block text-base text-white text-center">
            What are Credits ?
          </button>
        </div>
      </div>
      <div className="bg-bg-color shadow rounded-xl p-4 mb-6 border-2 border-br-color">
        <div className="flex justify-between">
          <p className="text-l font-bold">All credits to your wallet</p>
          <div className="relative bg-custom-light text-black-500 ml-4 rounded-full px-2 py-2 w- h-8">
            <p className="text-xs">1 Credit = 1</p>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-xs mb-2">Choose from our most purchased options</p>
          <div class="flex gap-2 w-full overflow-hidden" >
            {creditOptions.map((option, index) => (
              <div className=" transition-transform p-4 border rounded-3xl border-car-br-color shadow-sm w-auto"  key={index}>
                <div className="flex items-center mb-4">
                  <RadioGroup value={index}>
                    {({ checked }) => (
                      <span
                        className={`w-5 h-5 rounded-full border-2 ${
                          checked
                            ? "border-purple-600 bg-purple-600"
                            : "border-gray-300"
                        } mr-2`}
                      />
                    )}
                  </RadioGroup>
                  <span className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-xl font-semibold">
                      {option.credits}
                    </span>
                    <span className="text-gray-500 ml-2">Credits</span>
                  </span>
                  <span className="ml-auto text-black font-medium">
                    {option.discount}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">with</p>
                  <div className="flex items-center text-gray-500">
                    <span className="line-through mr-2">
                      {option.originalPrice}
                    </span>
                    <span className="text-lg font-semibold text-gray-800">
                      {option.discountedPrice}
                    </span>
                    <span className="ml-1">Credits</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs mt-6 mb-6">or</p>

        <div className="mb-2">
          <p className="text-l font-semibold mb-2">Enter amount Manually</p>
          <input
            text="text"
            class="w-full border rounded-full border-br-color p-2"
          />
        </div>

        <div className="bg-dark-bg text-black-500 rounded-full mt-12 px-2 py-2 text-sm w-full">
          <button className="text-base text-white text-center block mx-auto">
            Proceed to Pay
          </button>
        </div>
      </div>
    </>
  );
}

export default Wallet;
