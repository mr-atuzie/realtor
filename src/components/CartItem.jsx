import React from "react";
import { IoCloseOutline } from "react-icons/io5";
// import { removeFromCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";
import { formatter, shortenText } from "../utils";

const CartItem = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className=" mb-2 shadow-lg py-3.5 bg-white lg:hidden">
      <div className=" w-[90%] lg:w-[85%] mx-auto flex justify-between">
        <div className=" flex gap-2">
          <img className=" w-10 h-10 object-cover" src={img} alt="" />

          <div>
            <p className=" w-fit font-medium capitalize text-sm lg:text-base text-purple-600">
              {shortenText(name)}
            </p>

            <p className=" font-medium text-xs lg:text-sm">
              ₦{formatter(price)}
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            dispatch(
              removeFromCart({
                id,
                totalPrice: price,
              })
            )
          }
          className=""
        >
          <IoCloseOutline className=" text-red-600 ml-2" size={20} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
