import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});
