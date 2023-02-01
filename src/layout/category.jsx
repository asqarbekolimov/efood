import React, { useEffect, useState } from "react";
import { AsianFood, burgerfood, pizza, sandwich, setMenu } from "../assets";
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
      <CategoryMenu filterItem={filterItem} />
      <div className="container flex   justify-center gap-5 flex-wrap m-auto ">
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
    </section>
  );
}

export default Category;
