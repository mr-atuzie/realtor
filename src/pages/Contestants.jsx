import React, { useState } from "react";

const Contestants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contestants = [
    {
      id: 1,
      name: "ATUZIE REX HABINUCHI",
      code: "ART9085431",
      bio: "An enthusiastic and confident contestant with a passion for fashion and creative arts.",
      image:
        "https://media.istockphoto.com/id/1182617710/photo/photo-of-cheerful-curly-girl-with-positive-emotions.jpg?s=612x612&w=0&k=20&c=HeCma1qBTyPS5NdvkEh-LD9rmxQSvDed_zOtmx7OYOg=",
    },
    {
      id: 2,
      name: "CHIOMA OKAFOR",
      code: "ART728374",
      bio: "A dynamic and vibrant individual who loves performing arts and cultural heritage.",
      image:
        "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=F6PSgaagZEabgAfTvxE78YPhKtK-5a8yYoA_oSbGNMM=",
    },
    {
      id: 2,
      name: "ADESUWA OKITIRAN",
      code: "ART128654",
      bio: "A dynamic and vibrant individual who loves performing arts and cultural heritage.",
      image:
        "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
    },
    // Add more contestants here
  ];

  const filteredContestants = contestants.filter(
    (contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contestant.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl bg-orange-50 mx-auto ">
      <div className=" bg-white">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          All Contestants
        </h1>
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name or contestant code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 placeholder:text-sm bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-purple-500"
          />
        </div>
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
                  className=" w-full rounded-full object-cover mb-4"
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
