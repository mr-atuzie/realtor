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
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className=" py-10 lg:py-16 bg-purple-50">
      <div className=" w-[90%] lg:w-[85%]  mx-auto">
        {cart.length > 0 && (
          <div className=" w-full flex justify-end items-end ">
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
            <div className=" bg-white  py-4 px-2 my-6">
              <p className=" text-sm uppercase text-purple-600 font-medium">
                cart summary
              </p>
              <div className="  flex items-center justify-between">
                <p className=" text-xs font-medium">Subtotal</p>

                <p className=" font-semibold"> ₦ {formatter(cartTotal)}</p>
              </div>

              <p className=" text-[10px]">Delivery fees not included</p>
            </div>
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
            <Link to={"/shipping"}>
              <button className=" mt-9 rounded w-full items-center gap-2 text-xs bg-purple-600  p-2.5 text-white font-medium lg:text-sm">
                CHECKOUT
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
