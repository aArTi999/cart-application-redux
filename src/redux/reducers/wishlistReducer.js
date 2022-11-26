import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types/wishlist.types";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter((element) => element.id != action.payload);

    default:
      return state;
  }
};
