import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../types/cart.types";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((element) => element.id != action.payload);
    case UPDATE_CART:
      return state.map((element) => {
        if (element.id == action.product.id) {
          return action.product;
        }
        return element;
      });
    default:
      return state;
  }
};
