import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { GiJewelCrown } from "react-icons/gi";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { name, email, password, phone } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { name, email, phone, password };

    console.log(userData);

    //   try {
    //     await axios.post(
    //       `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/register`,
    //       userData,
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //     setLoading(false);

    //     toast.success("User Registered successfully");
    //     navigate("/dashboard");
    //   } catch (error) {
    //     const message =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setLoading(false);
    //     toast.error(message);
    //   }
  };

  return (
    <div className=" w-full justify-center items-center  bg-white   min-h-screen bg- ">
      <div className="  w-[90%] lg:w-[43%] mx-auto  py-10  lg:p-5">
        {/* <div className="flex items-center te space-x-2">
          <div className="">
            <GiQueenCrown size={20} />
          </div>
          <h4 className="text-2xl font-semibold">The Grand Stage</h4>
        </div> */}

        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col items-center justify-center text-pink-500 ">
            <span>
              <GiJewelCrown size={40} />
            </span>
            <h4 className="text-6xl  font-extrabold -mt-3  text-center mb-6 ">
              Registration Form
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <div className=" w-full ">
              <label className=" font-medium   text-sm mb-2" htmlFor="name">
                Fullname
              </label>

              <input
                className="border    p-2.5 bg-gray-50  rounded-lg  block w-full placeholder:text-sm "
                type="text"
                // placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={handleInputChange}
                id="name"
              />
              <small className=" text-xs text-gray-400">
                Name as you'd like it to appear in the contest.
              </small>
            </div>

            <div className=" ">
              <label className=" font-medium text-sm mb-2" htmlFor="email">
                Email
              </label>

              <input
                className="border p-2.5 bg-gray-50    rounded-lg   block w-full placeholder:text-sm"
                type="email"
                // placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
              />
              <small className=" text-xs text-gray-400">
                Make sure your email addresss is correct
              </small>
            </div>

            <div className=" ">
              <label className=" font-medium   text-sm" htmlFor="phone">
                Phone Number
              </label>

              <input
                className="border    p-2.5 bg-gray-50  rounded-lg  block w-full placeholder:text-sm "
                type="text"
                // placeholder="Enter your Name"
                name="name"
                value={phone}
                onChange={handleInputChange}
                id="name"
              />
              <small className=" text-xs text-gray-400">
                Make sure your phone number is valid
              </small>
            </div>

            <div className=" ">
              <label className=" font-medium text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="border p-2.5  bg-gray-50   block w-full  rounded-lg   placeholder:text-sm "
                type="password"
                name="password"
                // placeholder="Enter your Password"
                value={password}
                onChange={handleInputChange}
                id="password"
              />
              <small className=" text-xs text-gray-400">
                Password must be up 8 characters
              </small>
            </div>
          </div>
          <p className=" my-2 text-sm">
            Pay the entry fee ₦5,000 to complete your registration and confirm
            eligibility for voting.
          </p>

          <div className=" flex justify-center items-center flex-col">
            <button
              disabled={loading}
              className=" text-sm lg:text-base max-w-lg rounded-lg w-full text-center py-3  mt-10 bg-pink-600 disabled:bg-purple-300 text-white "
              type="submit"
            >
              {loading ? "Loading" : "Register"}
            </button>

            <p className="text-xs text-center  font-medium mt-6  capitalize  text-gray-500">
              Already have an account?
              <Link to={"/login"}>
                <span className=" text-pink-500 ml-1 ">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
