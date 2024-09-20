import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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

  const { name, email, password } = formData;

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

  const [phone, setPhone] = useState("");
  return (
    <div className=" w-full justify-center h-screen items-center bg-orange-50  flex">
      <div className="  w-[95%] lg:w-[43%] mx-auto bg-white rounded-sm shadow-md  p-5">
        <div className=" flex text-pink-500 ">
          <span>
            <GiJewelCrown size={30} />
          </span>
          <h4 className="text-8xl  font-extrabold  text-center mb-6 ">
            Registration Form
          </h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className=" w-full ">
              <label className=" font-medium  text-sm mb-2" htmlFor="name">
                Enter fullname
              </label>

              <input
                className="border    p-2.5  rounded-lg  block w-full placeholder:text-sm "
                type="text"
                // placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={handleInputChange}
                id="name"
              />
            </div>

            <div className=" ">
              <label className=" font-medium text-sm mb-2" htmlFor="email">
                Enter your Email
              </label>

              <input
                className="border p-2.5     rounded-lg   block w-full placeholder:text-sm"
                type="email"
                // placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
              />
            </div>

            <div className=" ">
              <label className=" font-medium  text-sm" htmlFor="phone">
                Phone Number
              </label>

              <PhoneInput
                country={"us"} // Default country code
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
                buttonStyle={{
                  background: "white",
                  borderRadius: "8px 0 0 8px",
                }}
              />
            </div>

            <div className=" ">
              <label className=" font-medium text-sm" htmlFor="password">
                Enter your Password
              </label>
              <input
                className="border p-2.5    block w-full  rounded-lg   placeholder:text-sm "
                type="password"
                name="password"
                // placeholder="Enter your Password"
                value={password}
                onChange={handleInputChange}
                id="password"
              />
              <small className=" text-xs text-gray-400">
                Password must be 8 character long
              </small>
            </div>
          </div>

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
                <span className=" text-purple-600 ml-1 ">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
