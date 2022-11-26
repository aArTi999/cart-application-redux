import React from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <header className="min-h-[10vh] w-full bg-blue-600 flex justify-around items-center">
      <div className="w-4/5 justify-center items-center gap-5 flex">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} className="w-24" />
        </div>
        <div className="w-1/3 ">
          <input
            type="text"
            placeholder="search for products, brands and more"
            className=" py-1.5 px-3 w-full  focus:outline-none text-sm"
          />
        </div>
        <div>
          <button className="px-12 py-1 text-center rounded-sm text-lg font-medium bg-white text-blue-600 cursor-pointer">
            Login
          </button>
        </div>
        <div
          onClick={() => navigate("/wishlist")}
          className="flex w-1/5  text-white justify-start ml-5 items-center gap-2 cursor-pointer"
        >
          <h3 className="text-xl font-medium flex">Wishlist</h3>
        </div>
        <div
          onClick={() => navigate("/cart")}
          className="flex w-1/5  text-white justify-start ml-5 items-center gap-2 cursor-pointer"
        >
          <FaShoppingCart className="text-xl" />
          <h3 className="text-xl font-medium flex">
            Cart
            {cart.length > 0 && (
              <div className="ml-1 w-5 text-sm h-5 bg-red-500 flex items-center justify-center text-white rounded-full">
                {cart.length}
              </div>
            )}
          </h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
