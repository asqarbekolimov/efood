import React from "react";
import { client, qout1, qout2, ArrowLeft, ArrowRight } from "../assets";

const Clietns = () => {
  return (
    <div className="mx-24">
      <h1 className="text-center font-rubik text-4xl font-medium">
        What Our Client Are <span className="text-secondary">Saying</span>{" "}
      </h1>
      <div className="flex items-center justify-evenly  flex-col md:flex-row">
        <div className="w-80">
          <img src={client} alt="" className="w-80" />
        </div>
        <div className="relative w-1/2 ">
          <img src={qout1} alt="" className="absolute -left-8 top-0" />
          <p className="text-primary text-xl">
            EFood has the most intriguing food order system in the country. UI
            in both their app and web Is very simple and easy to use, enhancing
            the UX. Their delivery men are also quite professional and knows the
            neighborhood well. Till now I never had to guide them to my address
            for delivery;{" "}
          </p>
          <img src={qout2} alt="" className="absolute right-0" />
          <div className="relative space-y-8 flex justify-between items-center">
            <div>
              <h1 className="text-xl text-secondary font-bold">Anglina Jole</h1>
              <p className="text-sm text-[#AAA]">Food lover</p>
            </div>
            <div className="flex">
              <img src={ArrowLeft} alt="" className="cursor-pointer" />
              <img src={ArrowRight} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clietns;
