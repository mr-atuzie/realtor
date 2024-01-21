import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const item =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const quantity =
  localStorage.getItem("quantity") !== null
    ? JSON.parse(localStorage.getItem("quantity"))
    : 0;

const totalPrice =
  localStorage.getItem("totalPrice") !== null
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0;

const initialState = {
  products: item,
  quantity: quantity,
  totalPrice: totalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.products.push(newItem);
        state.quantity++;

        state.totalPrice = state.products.reduce(
          (total, item) => {
            console.log({
              item,
              test: Number(item.price),
            });
            return total + Number(item.price);
          },

          0
        );

        toast.success("Product added to cart");
      }
      // } else {
      //   existingItem.quantity++;
      //   existingItem.totalPrice =
      //     Number(existingItem.totalPrice) + Number(newItem.totalPrice);
      // }
      // total + Number(item.price) * Number(item.quantity);

      // const tp = (state.totalPrice = state.products.reduce(
      //   (total, item) => total + Number(item.price) * Number(1),
      //   0
      // ));

      // console.log(tp);
      // alert(tp);

      localStorage.setItem(
        "cart",
        JSON.stringify(state.products.map((item) => item))
      );

      localStorage.setItem("quantity", JSON.stringify(state.quantity));

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    removeFromCart: (state, action) => {
      if (state.quantity > 0) {
        const newItem = action.payload;

        //reduce cart quantity
        state.quantity--;

        //fiter out the product
        state.products = state.products.filter(
          (item) => item.id !== newItem.id
        );

        //reduce cart total price
        state.totalPrice =
          Number(state.totalPrice) - Number(newItem.totalPrice);

        toast.success("Product was removed from cart");

        localStorage.setItem(
          "cart",
          JSON.stringify(state.products.map((item) => item))
        );

        localStorage.setItem("quantity", JSON.stringify(state.quantity));

        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },

    clearCart: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.totalPrice = 0;

       toast.success("Cart has been cleard");

      localStorage.setItem("cart", JSON.stringify(state.products));

      localStorage.setItem("quantity", JSON.stringify(state.quantity));

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.products;
export const selectQuantity = (state) => state.cart.quantity;
export const selectCartTotal = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
