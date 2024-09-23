import React from "react";

const Vote = () => {
  const galleryImages = [
    "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
  ];
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Vote for Rex atuzie
      </h3>

      <div className="my-6">
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
        {/* <div className="mt-4">
          <p className="text-sm lg:text-base">
            Voting Ends In: <span className="text-red-600">Countdown</span>
          </p>
        </div> */}
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
