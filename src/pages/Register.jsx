import React from "react";
// import { IoLogoBuffer } from "react-icons/io";
import { GiOwl } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaTwitter, FaApple } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-config";
// import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const navigate = useNavigate();

  const handleGoogle = async (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider).then((result) => {
        console.log(result);

        const user = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };

        sessionStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithub = async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);

      const credential = GithubAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;

      console.log(token);
      const user = result.user;
      console.log(user);
      // const user = {
      //   name: result.user.displayName,
      //   email: result.user.email,
      //   photo: result.user.photoURL,
      // };

      // sessionStorage.setItem("user", JSON.stringify(user));
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setErr(false);
  //   // setLoading(true);

  //   // const displayName = e.target[0].value;
  //   // const email = e.target[1].value;
  //   // const password = e.target[2].value;
  //   // const file = e.target[3].files[0];

  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);

  //     navigate("/");
  //   } catch (error) {
  //     // setErr(true);
  //     // setLoading(false);
  //     console.log(error);
  //   }
  // };

  return (
    <div className=" w-full bg-gray-50 h-screen">
      <form className=" w-[90%] lg:w-[38%] py-5 mx-auto">
        <div className=" flex items-center text-black">
          <GiOwl className=" font-bold" size={20} />
          <h1 className=" ml-1 font-bold text-sm   lg:text-base">ARTECH</h1>
        </div>

        <div className=" my-8">
          <Link to={"/phone"}>
            <h2 className="text-xl lg:text-3xl font-medium text-center ">
              Create your account
            </h2>
          </Link>
          <p className="text-xs text-gray-500 text-center">
            Improve your business by creating a strong digital presence.
          </p>
        </div>

        <button
          className=" w-full  flex items-center justify-center gap-2 text-center py-2 my-4 bg-white border text-black rounded-full"
          onClick={handleGoogle}
        >
          <FcGoogle />
          Sign up with Google
        </button>

        <button
          className=" w-full  flex items-center gap-2 text-center justify-center py-2 my-4 bg-white border   rounded-full"
          onClick={handleGithub}
        >
          <BsGithub className="text-black" />
          Sign up with Facebook
        </button>

        {/* <button
          className=" w-full   flex items-center gap-2 text-center justify-center py-2 my-4 bg-white border   rounded-full"
          type="submit"
        >
          <FaApple className="text-black" />
          Sign up with Apple
        </button> */}

        {/* <button
          className=" w-full  flex items-center gap-2 text-center justify-center py-2 my-4 bg-white border rounded-full"
          type="submit"
        >
          <FaTwitter className="text-blue-500" />
          Sign up with Twitter
        </button> */}

        <h1 className=" text-center text-lg my-4 capitalize text-gray-400">
          or
        </h1>

        <div className=" mb-3">
          <label className=" text-gray-800 text-xs" htmlFor="text">
            Fullname
          </label>

          <input
            className="border p-2 rounded-xl block w-full"
            type="text"
            name="text"
          />
        </div>

        <div className=" mb-3">
          <label className=" text-gray-800 text-xs" htmlFor="email">
            Email
          </label>

          <input
            className="border p-2 rounded-xl block w-full"
            type="email"
            name="email"
          />
        </div>

        <div className=" my-3">
          <label className=" text-gray-800 text-xs" htmlFor="password">
            Password
          </label>
          <input
            className="border p-2 rounded-xl block w-full"
            type="password"
            name="password"
          />
        </div>

        <button
          className=" w-full text-center py-2 my-4 bg-black text-white  rounded-xl"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
