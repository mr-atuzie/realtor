import React, { useState } from "react";
import toast from "react-hot-toast";
import { GiJewelCrown } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GiLaurelCrown } from "react-icons/gi";
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  // const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { email, password };

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
    <div className="w-full  bg-white min-h-screen">
      <div className="w-[90%] lg:w-[43%] mx-auto py-10 lg:py-12 lg:px-6 ">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-2 mb-10">
          <div className="text-pink-500">
            <GiLaurelCrown size={20} />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">The Grand Stage</h4>
        </div>

        {/* Welcome Back Section */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center text-pink-500 mb-8">
            <GiJewelCrown size={40} />
            <h4 className="text-4xl font-extrabold -mt-2">Welcome Back</h4>
            <p className="text-sm text-gray-500 mt-1">
              Log into your dashboard
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
                placeholder="Enter your Email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                id="password"
                placeholder="Enter your Password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              disabled={loading}
              className="text-sm lg:text-base w-full py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all disabled:bg-gray-300"
              type="submit"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p className="text-xs text-center font-medium mt-6 text-gray-500">
              Don't have an account?
              <Link to="/register" className="text-pink-500 ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
