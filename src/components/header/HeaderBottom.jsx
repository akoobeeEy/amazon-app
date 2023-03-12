import React, { useEffect, useRef, useState } from "react";
import SideNav from "./SideNav";
import { Menu, Close, AccountCircle } from "@mui/icons-material";
import { motion } from "framer-motion";
const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 py-3 h-[36px] bg-amazon_light text-white flex items-center">
      {/* List items start here */}
      <ul className="flex gap-3 items-center text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center"
        >
          <Menu />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {/* List items end here */}

      {/* sideNav start here */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-10 ">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_blue text-white py-2 px-6 flex items-center gap-4 ">
                <AccountCircle />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  {" "}
                  Hello, Sign In
                </h3>
              </div>
              <SideNav
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNav
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNav
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNav
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
            </motion.div>
            <span
              onClick={() => setSidebar(!sidebar)}
              className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border
            bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
            >
              <Close />
            </span>
          </div>
        </div>
      )}
      {/* sideNav end here */}
    </div>
  );
};

export default HeaderBottom;
