import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { states } from "../data";
import { IoCloseOutline } from "react-icons/io5";

const Shipping = () => {
  const navigate = useNavigate();

  const initialState = {
    shippingname: "",
    shippingemail: "",
    shippingphone: "",
    shippingState: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { shippingname, shippingphone, shippingemail, address, state } =
    formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    //  if (
    //    !shippingname ||
    //    !shippingemail ||
    //    !shippingphone ||

    //    !address
    //  ) {
    //    return toast.error("Make sure all required filled");
    //  }

    //  if (!validateEmail(shippingemail)) {
    //    return toast.error("Please enter a valid email");
    //  }

    const userData = {
      shippingname,
      shippingphone,
      shippingemail,
      address,
      state,
    };

    console.log(userData);
  };
  return (
    <div>
      <div className=" w-full my-12 lg:w-[45%] lg:mx-auto bg-white pt-2 pb-12 ">
        <div className=" w-[90%]  mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-full my-7">
              <div className=" flex justify-between items-center">
                <h1 className=" font-medium  text-2xl lg:text-4xl">
                  Delivery Form
                </h1>
                <IoCloseOutline
                  onClick={() => navigate(-1)}
                  size={30}
                  className=" text-gray-500 lg:hidden"
                />
              </div>

              <div className="  mb-5 lg:mb-7">
                <label
                  className=" text-gray-500 text-sm lg:text-[18px]"
                  htmlFor="text"
                >
                  Full name
                </label>
                <input
                  className=" border w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                  type="text"
                  name="shippingname"
                  value={shippingname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="  mb-5 lg:mb-7">
                <label
                  className=" text-gray-500 text-sm lg:text-[18px]"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className=" border w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                  type="email"
                  name="shippingemail"
                  value={shippingemail}
                  onChange={handleInputChange}
                />
              </div>
              <div className=" mb-4">
                <label
                  className=" text-gray-500 text-sm lg:text-[18px]"
                  htmlFor="text"
                >
                  Phone number
                </label>
                <input
                  className=" border w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                  type="t"
                  name="shippingphone"
                  value={shippingphone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* state */}
            <div className=" mb-5 lg:mb-7">
              <select
                name="state"
                value={state}
                onChange={handleInputChange}
                id="state"
                className="  w-full  mt-1 lg:mt-3   border text-gray-700  p-3 lg:p-4.5 "
              >
                <option>Select Country</option>
                {states.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-5  lg:mb-7">
              <label
                className=" text-gray-500 text-sm lg:text-[18px]"
                htmlFor="text"
              >
                Address
              </label>
              <input
                className="border w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                type="text"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </div>

            <button
              className="mt-9 rounded w-full items-center gap-2 text-xs bg-purple-600  p-2.5 text-white font-medium lg:text-sm"
              disabled={loading}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
