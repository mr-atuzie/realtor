import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { removeFromCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, name, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className=" border-b py-3.5 bg-white lg:hidden">
      <div className=" w-[90%] lg:w-[85%] mx-auto flex justify-between">
        <div className=" flex gap-2">
          <img
            className=" w-10 h-10 object-cover"
            src="https://i.pinimg.com/564x/80/e4/2c/80e42ce0f8a8f3a24baf075064087b64.jpg"
            alt=""
          />

          <div c>
            <p className=" w-fit capitalize text-sm lg:text-base text-pink-500">
              bag
            </p>

            <p className=" font-medium text-xs lg:text-sm">3</p>
          </div>
        </div>

        <div
          onClick={() =>
            dispatch(
              removeFromCart({
                id,
                totalPrice: price * quantity,
              })
            )
          }
          className=""
        >
          <IoCloseOutline className=" text-gray-500 ml-2" size={25} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
