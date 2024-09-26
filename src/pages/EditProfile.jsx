import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");

  const { name, email, password, phone } = formData;

  const navigate = useNavigate("/");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const maxLength = 40;

  const handleBioChange = (e) => {
    setBio(e.target.value);
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

    navigate("/dashboard");

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
    <div className=" w-full">
      <div className="flex items-center justify-center space-x-2 mb-5">
        {/* <GiLaurelCrown size={30} className="text-pink-500" /> */}
        <h4 className=" font-semibold capitalize">Edit Profile</h4>
      </div>
      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Full Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              id="name"
              placeholder="Enter your Name"
              required
            />
            <small className="text-xs text-gray-400 mt-1 block">
              Name as you'd like it to appear in the contest.
            </small>
          </div>

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
            <small className="text-xs text-gray-400 mt-1 block">
              Make sure your email address is correct.
            </small>
          </div>

          {/* Phone Number */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              id="phone"
              placeholder="Enter your Phone Number"
              required
            />
            <small className="text-xs text-gray-400 mt-1 block">
              Make sure your phone number is valid.
            </small>
          </div>

          {/* bio */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="bio"
            ></label>

            <textarea
              id="bio"
              name="bio"
              rows={4}
              value={bio}
              onChange={handleBioChange}
              maxLength={maxLength}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
              placeholder="Tell us about yourself (max 40 characters)"
            />

            <p className="text-sm text-gray-500">
              {bio.length}/{maxLength} characters used
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <button
            disabled={loading}
            className="text-sm lg:text-base w-full py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all disabled:bg-gray-300"
            type="submit"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
