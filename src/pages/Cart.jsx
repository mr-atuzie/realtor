import React from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectCart,
  selectCartTotal,
} from "../redux/features/cartSlice";
import { formatter } from "../utils";
import cartImg from "../assets/cart.svg";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className=" py-10 lg:py-16 bg-purple-50">
      {/* cartSlice:{formatter(cartTotal)} */}
      <div className=" w-[90%] lg:w-[85%]  mx-auto">
        {cart.length > 0 && (
          <div className=" w-full flex justify-end items-end mb-5">
            <button
              onClick={() => dispatch(clearCart())}
              className=" font-medium text-xs lg:text-sm fon  p-2  border border-purple-600 uppercase bg-white text-purple-600  hover:bg-purple-600 hover:text-white ease-in-out duration-300"
            >
              clear cart
            </button>
          </div>
        )}
        {cart.length === 0 && (
          <div className=" min-h-screen flex justify-center items-center flex-col">
            <img width={180} src={cartImg} alt="" />
            <p className=" text-gray-500 font-mono mt-1 text-sm">
              Cart is Empty{" "}
            </p>
          </div>
        )}

        {cart.length > 0 && (
          <div className=" min-h-screen">
            {cart?.map((ca) => {
              const { id, name, price, img } = ca;
              return (
                <CartItem
                  key={id}
                  id={id}
                  price={price}
                  name={name}
                  img={img}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
