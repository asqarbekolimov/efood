import React, { useState } from "react";
import search from "../assets/img/svg/Search.svg";
import basket from "../assets/img/svg/Buy.svg";
import { styles } from "../util/style";
import { navigationLinks } from "../util/constants";
import { burger, logo, xIcon } from "../assets";

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);

  return (
    <>
      <header className="bg-white w-full ">
        <div className={`navbar md:px-24 px-8 py-5 ${styles.flex}`}>
          <div className="logo">
            <img className="cursor-pointer" src={logo} alt="" />
          </div>
          <ul className="nav md:flex hidden items-center gap-8 font-rubik">
            {navigationLinks.map((nav, idx) => {
              return (
                <li key={nav.id}>
                  <a
                    className={`hover:text-active transition-all duration-200
                    ${active === nav.id ? "text-active" : "text-primary"}
                    `}
                    onClick={() => setActive(nav.id)}
                    href="#"
                  >
                    {nav.title}
                  </a>
                </li>
              );
            })}
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={basket} alt="" />
            </li>
            <li>
              <div className={`btn ${styles.btn}`}>Sign Up</div>
            </li>
          </ul>
          {/* Navigation burger btn */}
          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              onClick={toggleHandler}
              className="w-10 cursor-pointer"
              src={toggleNav ? xIcon : burger}
              alt="nav"
            />
          </div>
          <div
            className={`${
              !toggleNav ? "hidden" : "flex"
            } p-6 absolute top-16 ring-0 left-0 w-full bg-orange-300 sidebar`}
          >
            <ul className="nav flex items-start flex-1 flex-col  gap-8 text-white font-rubik">
              {navigationLinks.map((nav, idx) => {
                return (
                  <li key={nav.id}>
                    <a
                      className={`hover:text-active transition-all duration-200
                      ${active === nav.id ? "text-active" : "text-primary"}
                    `}
                      onClick={() => setActive(nav.id)}
                      href="#"
                    >
                      {nav.title}
                    </a>
                  </li>
                );
              })}
              <li>
                <img src={search} alt="" />
              </li>
              <li>
                <img src={basket} alt="" />
              </li>
              <li>
                <div className={`btn ${styles.btn}`}>Sign Up</div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
