import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/actions/wishlist.actions";
import { ImSad } from "react-icons/im";
import Header from "./Header";
const Wishlist = () => {
  const { wishlist } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <section className="w-full min-h[100vh] flex flex-col flex-wrap gap-5">
      <Header />
      <div className="w-full h-[90vh] flex gap-2">
        {wishlist.length ? (
          <div className="w-2/3 p-6">
            {wishlist.map((item, i) => (
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
                  </div>
                </div>
                <div>
                  <button
                    className="bg-red-500 px-6 py-2 rounded-md text-white"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex flex-col items-center justify-center ">
            <ImSad className="text-5xl text-yellow-500" />
            <h4 className="mt-12 text-3xl text-red-600 font-semibold">
              Have You Not Wishlist Any Item yet???
            </h4>
          </div>
        )}
      </div>
    </section>
  );
};
export default Wishlist;
