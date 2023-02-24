import React, { useEffect, useState } from "react";
import {
  AsianFood,
  burgerfood,
  DeliveryIcon,
  foodDelivery,
  pizza,
  ResturentIcon,
  sandwich,
  setMenu,
  TimerIcon,
} from "../assets";
import CategoryMenu from "../components/category-menu";
import { products } from "../util/constants";
import { styles } from "../util/style";

function Category() {
  const [item, setItem] = useState(products);

  const filterItem = (categItem) => {
    const updateItems = products.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItem(updateItems);
  };

  return (
    <section className="flex flex-col justify-center ">
      <div
        className={`${styles.heading} ${styles.paddinX} text-center my-14 text-4xl`}
      >
        Our popular <span className={`text-active`}>Category</span>
      </div>
      <div
        className={`container  m-auto ${styles.paddinX} mb-10 grid grid-cols-5 md:gap-2 gap-52 md:overflow-hidden overflow-auto`}
      >
        <CategoryMenu filterItem={filterItem} />
        <>
          <div
            className={`${styles.flex} w-40 gap-2 bg-white  px-6 rounded cursor-pointer`}
          >
            <img src={setMenu} alt="" /> <p>Set Menu</p>
          </div>
        </>
      </div>
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center m-auto ">
        {item.map((elem) => {
          const { id, img, descrption, price } = elem;
          return (
            <div
              className="cart  flex  flex-col justify-center py-5 px-7 rounded bg-white"
              key={id}
            >
              <img className="w-44" src={img} alt={id} />
              <h2 className="mt-1">{descrption}</h2>
              <div className=" mt-3">
                Price: <span className="  text-md font-bold">{price}</span>
              </div>
              <button className={`${styles.btn} mt-3`}>Add Cart</button>
            </div>
          );
        })}
      </div>

      <div className="container m-auto grid items-center md:grid-cols-2 grid-cols-1">
        <div>
          <img src={foodDelivery} alt="" />
        </div>
        <div>
          <div className="title font-rubik font-medium capitalize text-primary text-5xl mb-8 ">
            <span className="text-secondary ">Stay</span> at home, we will
            Provide <span className="text-secondary mx-3">good food</span>
          </div>
          <div className="font-rubik text-xl mb-7">
            We provide tasty food and superfast delivery at <br /> your home.
            Let’s use our services right now and <br /> get discounts of up to
            50%.
          </div>
          <div className="font-rubik text-2xl flex items-center capitalize">
            <img className="w-10 mr-6" src={TimerIcon} alt="TimerIcon" />
            fasted delivery in 30 Minutes
          </div>
          <div className="font-rubik text-2xl my-6 flex items-center capitalize">
            <img className="w-10 mr-6" src={DeliveryIcon} alt="DeliveryIcon" />
            300+ delivery men
          </div>
          <div className="font-rubik text-xl flex items-center capitalize">
            <img
              className="w-10 mr-6"
              src={ResturentIcon}
              alt="ResturentIcon"
            />
            500+ restaurant & cafe shop
          </div>
          <div
            className={`btn bg-secondary text-white py-2 px-6 mt-6 roundedBtn shadow-3xl`}
          >
            See More
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
