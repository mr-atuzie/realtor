import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
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
    <div className=" w-full min-h-screen flex justify-center flex-col items-center  py-10">
      <div className=" w-[95%] lg:w-[43%] mx-auto  p-5  ">
        <h2 className="text-xl  font-semibold  text-center mb-6 ">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            <div className=" ">
              <label
                className=" font-medium  text-xs lg:text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="border p-2 bg-gray-100    rounded-lg   block w-full placeholder:text-sm"
                type="email"
                // placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
              />
            </div>

            <div className=" ">
              <label
                className=" font-medium text-xs lg:text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border p-2  block w-full bg-gray-100    rounded-lg   placeholder:text-sm "
                type="password"
                name="password"
                // placeholder="Enter your Password"
                value={password}
                onChange={handleInputChange}
                id="password"
              />
            </div>
          </div>

          <div className=" flex justify-center items-center flex-col">
            <button
              disabled={loading}
              className=" text-sm lg:text-base max-w-lg rounded-lg w-full text-center py-2  mt-10 bg-purple-600 disabled:bg-purple-300 text-white "
              type="submit"
            >
              {loading ? "Loading" : "Register"}
            </button>

            <p className="text-xs text-center  font-medium mt-6  capitalize  text-gray-500">
              Don't have an account?
              <Link to={"/register"}>
                <span className=" text-purple-600 ml-1 ">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
