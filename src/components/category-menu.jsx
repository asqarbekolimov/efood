import React from "react";
import { categoryMenu } from "../util/constants";
import { styles } from "../util/style";

function CategoryMenu({ filterItem }) {
  return (
    <div
      className={`container  m-auto ${styles.paddinX} mb-10 flex gap-10 justify-center flex-row  flex-wrap`}
    >
      {categoryMenu.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => filterItem(item.category)}
            className={`${styles.flex} w-40 gap-2 bg-white  px-6 rounded cursor-pointer`}
          >
            <img src={item.icon} alt="" /> {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default CategoryMenu;
