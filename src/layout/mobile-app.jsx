import React from "react";
import { appStore, phoneImg, playmarket } from "../assets";

const MobileApp = () => {
  return (
    <div className="w-full px-16 lg:px-28 flex flex-col-reverse md:flex-row items-center justify-center mt-36">
      <div>
        <h1 className="text-2xl font-rubik font-medium">
          Download Our <span className="text-secondary">Mobile App</span>
        </h1>
        <p className="text-justify text-lg">
          It's all at your fingertips -- the restaurants you love. Find <br />{" "}
          the right food to suit your mood, and make the first bite <br /> last.
          Go ahead, download app and get 50% discount
        </p>
        <div className="flex gap-5 mt-5">
          <img src={appStore} alt="" />
          <img src={playmarket} alt="" />
        </div>
      </div>
      <div className="mb-5 flex justify-center">
        <img src={phoneImg} alt="" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default MobileApp;
