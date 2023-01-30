import React from "react";
import heroImg from "../assets/img/Header.png";
import { styles } from "../util/style";

function Hero() {
  return (
    <section
      className={`md:flex-row flex-col-reverse  ${styles.paddinX} ${styles.flex}`}
    >
      <div className="right flex-1 flex-col xl:px-0 ">
        <div className={`title ${styles.heading} text-5xl mb-5 `}>
          super fast
          <span className="text-secondary mx-3">Food delivery</span>
          Service
        </div>
        <p className={`${styles.paragraph} text-lg text-justify mb-8`}>
          We provide super fast-delivery service. Let’s use our services right
          now and get discounts of up to 50%
        </p>
        <div className="btn-group flex">
          <div className="btn  bg-secondary text-white py-2 px-6 rounded shadow-3xl">
            Explore Food
          </div>
          <div className="btn  text-primary py-2 px-6 rounded underline">
            Download App
          </div>
        </div>
      </div>
      <div className="left flex-1 md:my-0 my-10 relative">
        <img className="w-[100%] h-[100%] relative z-10" src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
