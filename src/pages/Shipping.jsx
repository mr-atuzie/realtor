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
    <>
      <div className=" w-full  lg:mx-auto bg-white  ">
        <div className=" w-[90%]  mx-auto">
          <div className=" flex justify-between items-center mt-5">
            <h1 className=" font-semibold text-purple-600  text-lg">
              Delivery Form
            </h1>
            <IoCloseOutline
              onClick={() => navigate(-1)}
              size={20}
              className=" text-red-500 "
            />
          </div>
          <form className="w-full my-7" onSubmit={handleSubmit}>
            {/* name */}
            <div className="  mb-4 ">
              <label
                className=" text-gray-500 text-xs lg:text-sm "
                htmlFor="shippingname"
              >
                Full name
              </label>
              <input
                className=" rounded border border-purple-300 w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                type="text"
                name="shippingname"
                id="shippingname"
                value={shippingname}
                onChange={handleInputChange}
              />
            </div>
            {/* email */}
            <div className="  mb-4 ">
              <label
                className=" text-gray-500  text-xs lg:text-sm"
                htmlFor="shippingemail"
              >
                Email address
              </label>
              <input
                className=" rounded border border-purple-300 w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                type="email"
                name="shippingemail"
                id="shippingemail"
                value={shippingemail}
                onChange={handleInputChange}
              />
            </div>
            {/* number */}
            <div className=" mb-4">
              <label
                className=" text-gray-500  text-xs lg:text-sm"
                htmlFor="shippingphone"
              >
                Phone number
              </label>
              <input
                className=" rounded border border-purple-300 w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                type="text"
                name="shippingphone"
                id="shippingphone"
                value={shippingphone}
                onChange={handleInputChange}
              />
            </div>
            {/* state */}
            <div className=" mb-4">
              <label
                className=" text-gray-500  text-xs lg:text-sm"
                htmlFor="state"
              >
                State
              </label>
              <select
                name="state"
                value={state}
                onChange={handleInputChange}
                id="state"
                className="  w-full  mt-1 lg:mt-3   rounded border border-purple-300 text-gray-700  p-3 "
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
            {/* address */}
            <div className="mb-4  ">
              <label
                className=" text-gray-500  text-xs lg:text-sm"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="rounded border border-purple-300 w-full p-2.5 lg:p-3.5 mt-1 lg:mt-3"
                type="text"
                name="address"
                value={address}
                id="address"
                onChange={handleInputChange}
              />
            </div>

            <button
              className="mt-3 rounded w-full items-center gap-2 text-xs bg-purple-600  p-3 text-white font-medium lg:text-sm"
              disabled={loading}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Shipping;
