import React from "react";
// import { GiLaurelCrown } from "react-icons/gi";
import avatar from "../assets/award.svg";
import { Link } from "react-router-dom";
import CountUpAnimation from "../components/CountUpAnimation";

const Dashboard = () => {
  const galleryImages = [
    "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=F6PSgaagZEabgAfTvxE78YPhKtK-5a8yYoA_oSbGNMM=",
    "https://media.istockphoto.com/id/1182617710/photo/photo-of-cheerful-curly-girl-with-positive-emotions.jpg?s=612x612&w=0&k=20&c=HeCma1qBTyPS5NdvkEh-LD9rmxQSvDed_zOtmx7OYOg=",
    "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
  ];
  return (
    <div className=" w-full  space-y-6 mb-24 lg:mb-0">
      {/* Contestant Info */}
      <div className="flex items-center justify-center space-x-2 my-4">
        {/* <GiLaurelCrown size={30} className="text-pink-500" /> */}
        <h2 className="font-semibold capitalize text-sm">Dashboard</h2>
      </div>

      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="Contestant"
          className="w-24 h-24 object-cover "
        />
        <div>
          <h1 className=" text-xl lg:text-3xl font-semibold">Rex atuzie</h1>
          <p className="text-gray-600 mb-1 font-medium text-sm lg:text-base">
            Contestant code: <span className="font-mono">ASR34567</span>
          </p>
          <p className=" text-xs w-fit p-2 bg-green-50 rounded-lg lg:text-sm text-green-600">
            Active
          </p>
        </div>
      </div>

      {/* Vote Information */}
      <div className="my-6">
        <h2 className=" lg:text-2xl font-semibold">Voting</h2>
        <div className="flex space-x-5 lg:space-x-8">
          <div>
            <p className=" text-sm lg:text-base">Total Votes</p>
            {/* <h3 className="text-xl font-bold">9,000</h3> */}

            <CountUpAnimation count={9000} />
          </div>
          <div>
            <p className=" text-sm lg:text-base">Current Rank</p>
            {/* <h3 className="text-xl font-bold">#23</h3> */}
            <CountUpAnimation count={100} />
          </div>
          <Link to={"/vote/contestant/1234"}>
            <button className="bg-pink-500 font-medium text-sm lg:text-base text-white py-2 px-4 rounded-md">
              Vote Now
            </button>
          </Link>
        </div>
        <div className="mt-4">
          {/* <p className="text-sm lg:text-base">
            Voting Ends In: <span className="text-red-600">Countdown</span>
          </p> */}
          {/* Votes Start and End */}
          <div className="flex items-center text-sm space-x-2 mb-3">
            <span className="text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
            </span>
            <div>
              <h2 className="font-medium capitalize text-gray-600">
                Voting Starts
              </h2>
              <p className=" ">January 1, 2024</p>
            </div>
          </div>

          <div className="flex items-center text-sm space-x-2">
            <span className="text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
            <div>
              <h2 className="font-medium capitalize text-gray-600 ">
                Voting Ends
              </h2>
              <p className="">January 31, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contestant Bio */}
      <div className="my-6">
        <div className=" flex justify-between items-center">
          <h4 className=" lg:text-2xl font-semibold">About Rex atuzie</h4>

          <div className=" border border-pink-500 text-pink-500 p-2 rounded-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </span>
          </div>
        </div>
        <p className=" text-sm lg:text-base">
          An enthusiastic and confident contestant with a passion for fashion
          and creative arts.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="my-6">
        <h2 className=" lg:text-2xl font-semibold mb-3">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Contestant Gallery"
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="my-6">
        <h2 className=" text-lg lg:text-2xl font-semibold">Share</h2>
        <div className="flex text-sm space-x-4">
          <a href="*" className="text-blue-600">
            Facebook
          </a>
          <a href="*" className="text-blue-400">
            Twitter
          </a>
          <a href="*" className="text-pink-600">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
