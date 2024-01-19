import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/features/cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
