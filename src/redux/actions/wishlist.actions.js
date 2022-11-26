import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types/wishlist.types";

export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});
export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
});
