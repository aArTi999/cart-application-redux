import React, { useEffect, useState } from "react";
import Header from "./Header";
import { HiMinus } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../redux/actions/cart.actions";
import { ImSad } from "react-icons/im";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const updateCartItem = (index, quantity) => {
    if (quantity > 0) {
      dispatch(updateCart({ ...cart[index], quantity: quantity }));
    } else {
      dispatch(removeFromCart(cart[index].id));
    }
  };

  const calculateTotal = () => {
    let amount = 0;
    let totalDiscount = 0;
    cart.forEach((item) => {
      let discountedPrice = Math.round(
        (item.price * item.quantity * item.discountPercentage) / 100
      );
      totalDiscount += discountedPrice;
      amount += item.price * item.quantity - discountedPrice;
    });

    setTotal(amount);
    setDiscount(totalDiscount);
  };

  useEffect(() => {
    calculateTotal();
  }, [updateCartItem]);

  return (
    <section className="w-full min-h[100vh] flex flex-col flex-wrap gap-5">
      <Header />
      <div className="w-full h-[90vh] flex gap-2">
        {cart.length ? (
          <div className="w-2/3 p-6">
            {cart.map((item, i) => (
              <div
                key={item.id}
                className="flex  p-5 gap-10 items-center  shadow-lg mt-5 rounded-md"
              >
                <img
                  src={item.thumbnail}
                  alt=""
                  className="w-[20vh] h-[20vh] "
                />
                <div className="flex justify-between w-3/4 items-center">
                  <div className="flex flex-col gap-1 w-2/3">
                    <h3 className="text-xl font-bold tracking-wider">
                      Brand: {item.brand}
                    </h3>
                    <h4 className="text-lg font-semibold">
                      Price: ${item.price}
                    </h4>
                    <p className="text-lg ">Title : {item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="shadow-lg flex ">
                    <button
                      className="px-6 py-3 text-xl bg-slate-200 hover:bg-slate-300"
                      onClick={() => updateCartItem(i, --item.quantity)}
                    >
                      <HiMinus />
                    </button>
                    <span className="px-6 py-3 text-xl bg-slate-50 ">
                      {item.quantity}
                    </span>
                    <button
                      className="px-6 py-3 text-xl bg-slate-200 hover:bg-slate-300"
                      onClick={() => updateCartItem(i, ++item.quantity)}
                    >
                      <MdAdd />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex flex-col items-center justify-center ">
            <ImSad className="text-5xl text-yellow-500" />
            <h4 className="mt-12 text-3xl text-red-600 font-semibold">
              Have You Not added Any Item yet???
            </h4>
          </div>
        )}

        <div className="w-2/6 h-3/4 shadow-lg p-8 rounded-md">
          <h3 className="text-3xl  font-semibold mb-2 ">Price Details</h3>
          <hr className="border-1" />
          <div className="w-full py-5">
            <div className="flex justify-between text-xl  my-5">
              <span>Price ({cart.length} Items):</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between text-xl my-5">
              <span>Discount:</span>
              <span className=" text-green-500">- ${discount}</span>
            </div>
            <div className="flex justify-between text-xl my-5">
              <span>Delievery Charges:</span>
              <span
                className={
                  total - discount < 100 ? `text-red-500` : `text-green-500`
                }
              >
                {total && total - discount < 100 ? "+ $30" : "Free"}
              </span>
            </div>
          </div>
          <hr />
          <h3 className="flex justify-between mt-4">
            <span className="text-2xl font-semibold tracking-wider">
              Total:
            </span>
            <span className="text-2xl font-semibold tracking-wider">
              $
              {total && total + discount < 100
                ? total - discount + 30
                : total - discount}
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Cart;
