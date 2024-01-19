import React from "react";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div className=" py-10 lg:py-16">
      <div className=" w-[95%] lg:w-[85%]  mx-auto">
        <div className=" w-full flex justify-end items-end my-5">
          <button
            onClick={() => dispatch(clearCart())}
            className=" font-medium text-xs lg:text-sm  p-2  border border-purple-600 uppercase bg-white text-purple-600  hover:bg-purple-600 hover:text-white ease-in-out duration-300"
          >
            clear cart
          </button>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
