import React from "react";

const Vote = () => {
  const galleryImages = [
    "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
  ];
  return (
    <div>
      <div>
        <h1 className=" text-xl lg:text-3xl font-semibold">Rex atuzie</h1>
        <p className="text-gray-600 mb-1 text-sm lg:text-base">
          Contestant Code: <span className="font-mono">ASR34567</span>
        </p>
        <p className=" text-xs w-fit p-2 bg-green-50 rounded-md lg:text-sm text-green-600">
          Status: Active
        </p>
      </div>

      {/* Vote Information */}
      <div className="my-6">
        <h2 className=" text-xl lg:text-2xl font-semibold">Voting</h2>
        <div className="flex space-x-5 lg:space-x-8">
          <div>
            <p className=" text-sm lg:text-base">Total Votes</p>
            <h3 className="text-xl font-bold">9,000</h3>
          </div>
          <div>
            <p className=" text-sm lg:text-base">Current Rank</p>
            <h3 className="text-xl font-bold">#23</h3>
          </div>
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
              <h2 className="font-semibold capitalize text-gray-600">
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
              <h2 className="font-semibold capitalize text-gray-600">
                Voting Ends
              </h2>
              <p className="">January 31, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="my-6">
        <h2 className=" text-xl lg:text-2xl font-semibold mb-3">Gallery</h2>
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

      <form>
        <p className=" text-start">
          {" "}
          Ensure the contestant is who you wnat to vote for
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* No of votes */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Total number of vots you want
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter the total number of vots you want"
              required
            />
          </div>

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
              id="name"
              placeholder="Enter your full name"
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
              id="email"
              placeholder="Enter your Email"
              required
            />
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
              id="phone"
              placeholder="Enter your Phone Number"
              required
            />
          </div>

          <p className=" text-gray-600">
            Ecach vote cost{" "}
            <span className=" font-semibold text-black">200NGN</span>
          </p>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Vote;
