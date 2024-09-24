import React, { useState } from "react";

const Contestants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contestants = [
    {
      id: 1,
      name: "ATUZIE REX HABINUCHI",
      code: "ART9085431",
      bio: "An enthusiastic and confident contestant with a passion for fashion and creative arts.",
      image: "/path/to/contestant-image1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "CHIOMA OKAFOR",
      code: "ART728374",
      bio: "A dynamic and vibrant individual who loves performing arts and cultural heritage.",
      image: "/path/to/contestant-image2.jpg", // Replace with actual image path
    },
    // Add more contestants here
  ];

  const filteredContestants = contestants.filter(
    (contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contestant.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        All Contestants
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name or contestant code"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-purple-500"
        />
      </div>

      {/* Contestant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContestants.length > 0 ? (
          filteredContestants.map((contestant) => (
            <div
              key={contestant.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {/* Contestant Info */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={contestant.image}
                  alt={contestant.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {contestant.name}
                </h2>
                <p className="text-sm text-gray-600 font-mono">
                  {contestant.code}
                </p>
                <p className="text-sm text-gray-600">{contestant.bio}</p>
              </div>

              {/* Vote Button */}
              <div className="mt-6 text-center">
                <a
                  href={`/vote/contestant/${contestant.id}`}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Vote Now
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No contestants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contestants;
