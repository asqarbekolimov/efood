import React from "react";
import { Send } from "../assets";
import { styles } from "../util/style";

const Subscribe = () => {
  return (
    <div className={` ${styles.paddinX}`}>
      <div className="bg-[#FF7F56] my-10 py-14 rounded-2xl flex justify-center items-center flex-col">
        <h1 className="text-4xl mb-3 font-semibold text-white">
          Subscribe to get the Latest Offer
        </h1>
        <p className="text-sm mb-10 text-white">
          Get our daily updates by subscribing to our newspaper, please drop
          your email below
        </p>
        <label className=" flex items-center justify-center rounded-[70px] bg-white py-2 pl-5 pr-2">
          <input
            type="text"
            placeholder="Enter your email addres"
            className="mr-10 outline-none"
          />
          <button
            type="button"
            className="flex items-center p-3 rounded-[70px] text-sm font-semibold text-white bg-[#FF7F56]"
          >
            <img src={Send} alt="" /> Subscribe
          </button>
        </label>
      </div>
    </div>
  );
};

export default Subscribe;
