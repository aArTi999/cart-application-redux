import React, { useEffect, useState } from "react";
import { products } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cart.actions";
import { v4 } from "uuid";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/actions/wishlist.actions";
const Products = () => {
  const { cart, wishlist } = useSelector((state) => state);

  const dispatch = useDispatch();
  const addToTheCart = (product) => {
    const alreadyAdded = cart.findIndex((p) => p.id === product.id);
    if (alreadyAdded < 0) {
      dispatch(addToCart({ ...product, cartId: v4(), quantity: 1 }));
      alert(`${product.title} added successfully to the cart`);
    } else {
      alert(
        `${product.title} is already added to cart, You can increase the quantity from cart`
      );
    }
  };
  const addToTheWishlist = (product) => {
    const alreadyAdded = wishlist.findIndex((p) => p.id === product.id);
    if (alreadyAdded < 0) {
      dispatch(addToWishlist(product));
      alert(`${product.title} added successfully to wishlist.`);
    }
  };

  const checkWishlist = (id) => {
    const isWishlisted = wishlist.findIndex((e) => e.id == id);
    console.log(isWishlisted);
    if (isWishlisted < 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="w-full min-h[100vh] flex flex-col flex-wrap gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex  p-5 gap-10 items-center  shadow-lg mt-5"
        >
          <img src={product.thumbnail} alt="" className="w-[40vh] h-[40vh] " />
          <div className="flex justify-between w-3/4 items-center">
            <div className="flex flex-col gap-2 w-2/3">
              <h3 className="text-2xl font-bold tracking-wider">
                Brand: {product.brand}
              </h3>
              <h4 className="text-xl font-semibold">Price: ${product.price}</h4>
              <p className="text-xl ">Title : {product.title}</p>

              <p className="text-lg w-4/5">
                Product Description: {product.description}
              </p>
              <p>Ratings : {product.rating}</p>
            </div>
            <div className="flex items-center gap-5">
              {checkWishlist(product.id) ? (
                <AiFillHeart
                  onClick={() => {
                    dispatch(removeFromWishlist(product.id));
                  }}
                />
              ) : (
                <AiOutlineHeart onClick={() => addToTheWishlist(product)} />
              )}

              <button
                onClick={() => addToTheCart(product)}
                className="bg-blue-600 text-white  font-semibold tracking-wide px-10 py-2 rounded-md "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
