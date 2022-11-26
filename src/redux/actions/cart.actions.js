import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../types/cart.types";
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
export const updateCart = (item) => ({
  type: UPDATE_CART,
  product: item,
});
