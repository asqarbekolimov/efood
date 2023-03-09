import React from "react";
import { right, timer } from "../assets";
import { topFoods } from "../util/constants";
import { styles } from "../util/style";

function TopFoods() {
  return (
    <section className="flex-col flex justify-center items-center px-5">
      <div
        div
        className={`${styles.heading} ${styles.paddinX} text-center my-14 text-4xl`}
      >
        Top Food <span className={`text-active`}>restaurant</span>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {topFoods.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
            <div className="borderRight bg-white py-5 px-4 ">
              <h1 className="text-2xl mb-3">{item.descrption}</h1>
              <p className="text-sm flex items-center gap-4">
                <img className="inline" src={timer} alt="" /> {item.date}
                <img
                  className="btn bg-secondary text-white py-2 px-4 roundedBtn shadow-3xl"
                  src={right}
                  alt=""
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopFoods;
