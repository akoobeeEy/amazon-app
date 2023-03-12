import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  Api,
  ArrowCircleRight,
  Favorite,
  ShoppingCart,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {
  const dispatch = useDispatch()
  const data = useLoaderData();
  const productData = data.data;
  return (
    <div className="max-w-screen-2xl mx-auto grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-10 gap-6">
      {productData.map((item) => (
        <div className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4">
          <div className="w-full h-auto flex items-center justify-center relative group">
            <span className="text-xs capitalize italic absolute top-0 xl:-top-4 right-2 text-gray-500">
              {item.category}
            </span>
            <img className="w-52 h-64 object-contain" src={item.image} alt="" />
            <ul
              className="w-full h-36 bg-gray-100 absolute bottom-[-170px]  flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r
           group-hover:bottom-0"
            >
              <li className="productLi">
                Compare
                <span>
                  <Api />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCart />
                </span>
              </li>
              <li className="productLi">
                View Details
                <span>
                  <ArrowCircleRight />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List
                <span>
                  <Favorite />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 100)}...</p>
              <div>
                <ReactStars
                  count={5}
                  onChange={"ratingChanged"}
                  size={24}
                  activeColor="#ffd700"
                  value={4}
                />
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              category:item.category,
              image:item.image,
              quantity:1,
            }))} className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
