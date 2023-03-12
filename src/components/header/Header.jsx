import { useState } from "react";
import { logo } from "../../assets/index";
import {
  ArrowDropDownOutlined,
  LocationOn,
  ShoppingCart,
  Search,
} from "@mui/icons-material";
import { allItems } from "../../constants/allData";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);


  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* ======= Image start here  ========= */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2 " src={logo} alt="logo" />
          </div>
        </Link>
        {/* ======= Image End Here  ========= */}

        {/* ======= Deliver Start Here  ========= */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOn />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm text-whiteText font-semibold -mt-1">
              Oman
            </span>
          </p>
        </div>
        {/* ======= Deliver Start End Here  ========= */}

        {/* ======= Search Start Here  ========= */}
        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 tex-sm text-amazon_blue font-titleFont flex items-center  justify-center rounede-t1-md rounded-b1-md"
          >
            All
            <span>
              {showAll && (
                <div>
                  <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                    {allItems.map((item) => (
                      <li
                        className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                        key={item.id}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </span>
            <ArrowDropDownOutlined />
          </span>
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <Search />
          </span>
        </div>

        {/* ======= Search End Here  ========= */}

        {/* ======= Signin Start Here  ========= */}
        <Link to="/signup">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-xs text-lightText font-light">Hello, sign in</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlined />
              </span>
            </p>
          </div>
        </Link>

        {/* ======= Signin  End Here  ========= */}

        {/* ======= Orders Start  Here  ========= */}
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-sm mld:text-xs text-white mdl:text-lightText font-light">
            Returns
          </p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ======= Orders  End Here  ========= */}

        {/* ======= Card Start  Here  ========= */}
      <Link to="/cart">
      <div className="flex  items-start justify-center headerHover relative">
          <ShoppingCart />
          <p className="text-sm font-semibold mt-3 text-whiteText">
            Cart
            <span
              className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex
          justift-center items-center"
            >
              {products.length > 0 ? products.length : 0}
            </span>
          </p>
        </div>
      </Link>
        {/* ======= Card End  Here  ========= */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
