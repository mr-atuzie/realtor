import React, { useState } from "react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=sph",
      name: "6 bedroom duplex",
      type: "duplex",
      price: "1,500,000",
      leaseType: "rent",
      location: "Victoria Island Lagos",
      duration: "1 year",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=sph",
      name: "3 bedroom condo",
      type: "condo",
      price: "35,000,00",
      leaseType: "sale",
      location: "Lekki phase 2 Lagos",
      duration: "1 year",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/residential-building-with-windows-balconies_140725-7608.jpg?w=996&t=st=1679700469~exp=1679701069~hmac=0fc66548c9c24020d78755febc2ee60c81b2c75bcc90f887e7b5a5ac69ccd6ea",
      name: "2 bedroom apartment",
      type: "apartment",
      price: "600,000",
      leaseType: "rent",
      location: "Yaba Lagos",
      duration: "1 year",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=996&t=st=1679700640~exp=1679701240~hmac=0760488148d5dd3eb7fdcbc83b457f061cd1fa4571d980b9f6f9da3c589aee7e",
      name: "2 bedroom bungalow",
      type: "bungalow",
      price: "2,500,000",
      leaseType: "sale",
      location: "Rumuola port-harcourt",
      duration: "1 year",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=sph",
      name: "3 bedroom condo",
      type: "condo",
      price: "1,800,000",
      leaseType: "rent",
      location: "gwagwalada abuja",
      duration: "2 years",
    },
    {
      id: 6,
      img: "https://images.ctfassets.net/abyiu1tn7a0f/68ITLPczSDCaWPK3dKM8og/30579f4c2321d7337da2f0d569af851e/2-3-4-bed-terraces.jpg",
      name: "4 bedroom terrace duplex",
      price: "700,000",
      type: "duplex",
      leaseType: "rent",
      location: "Ibadan Oyo",
      duration: "1 year",
    },
    {
      id: 7,
      img: "https://images.ctfassets.net/abyiu1tn7a0f/60Q86fgjFYMrYGmIUv942p/61814dccdd0fc17cc66bc9a9af98f259/fully-detached-cosgrove-katampe-phase-2.jpg",
      name: "5 bedroom  duplex",
      type: "duplex",
      price: "8,000,000",
      leaseType: "rent",
      location: "ikeja Lagos",
      duration: "3 years",
    },
    {
      id: 8,
      img: "https://img.freepik.com/premium-photo/3d-rendering-house-illustration_62754-2269.jpg?w=1060",
      name: "9 bedroom mini mansion",
      type: "mansion",
      price: "700,000,000",
      leaseType: "sale",
      location: "banana island lagos",
      duration: "1 year",
    },
    {
      id: 9,
      img: "https://t4.ftcdn.net/jpg/01/17/76/39/240_F_117763961_0Z6X8En9WsacgyBjtjCSPyWN8DnAPtxG.jpg",
      name: "8 bedroom terrace duplex",
      type: "duplex",
      price: "174,000,000",
      leaseType: "sale",
      location: "FCT Abuja",
      duration: "1 year",
    },
    {
      id: 10,
      img: "https://images.ctfassets.net/abyiu1tn7a0f/4eBTFh8vwcOGKttUEtvGLz/0c9ebb1538b558347b9bb9dd41cf6181/2-bedroom-3-apartments.jpg",
      name: "2 bedroom apartment",
      type: "apartment",
      price: "700,000",
      leaseType: "rent",
      location: "Asaba delta",
      duration: "1 year",
    },
  ];

  const [listing, setListing] = useState(properties);

  const filterType = (type) => {
    const newListing = properties.filter((item) => {
      return item.type === type;
    });

    setListing(newListing);
  };

  const filterLease = (type) => {
    const newListing = properties.filter((item) => {
      return item.leaseType === type;
    });

    setListing(newListing);
  };

  return (
    <div className=" bg-gray-50  py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto ">
        <div>
          <div className=" text-2xl capitalize text-center font-medium">
            {" "}
            Recently listed Property{" "}
          </div>
          <p className="text-gray-500 text-center">
            Voluptatibus officia et quo.Ipsa nobis sint consectetur adipisicing
            elit.
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row lg:justify-between  my-3">
          <div>
            <h2 className=" font-medium mb-1 text-lg">Filter Types</h2>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setListing(properties)}
                className=" border rounded-2xl p-3   capitalize border-green-300 bg-transparent hover:border-none text-green-700 hover:bg-green-700 hover:text-white"
              >
                all
              </button>
              <button
                onClick={() => filterType("condo")}
                className=" border rounded-2xl p-3   capitalize border-green-300 bg-transparent hover:border-none text-green-700 hover:bg-green-700 hover:text-white"
              >
                Condos
              </button>
              <button
                onClick={() => filterType("bungalow")}
                className=" border rounded-2xl p-3   capitalize border-green-300 bg-transparent hover:border-none text-green-700 hover:bg-green-700 hover:text-white"
              >
                Bungalows
              </button>
              <button
                onClick={() => filterType("duplex")}
                className=" border rounded-2xl p-3  capitalize border-green-300 bg-transparent hover:border-none text-green-700 hover:bg-green-700 hover:text-white"
              >
                duplex
              </button>
              <button
                onClick={() => filterType("apartment")}
                className=" border rounded-2xl p-3  capitalize border-green-300 bg-transparent hover:border-none text-green-700 hover:bg-green-700 hover:text-white"
              >
                apartments
              </button>
              <button
                onClick={() => filterType("mansion")}
                className=" border rounded-2xl p-3  capitalize border-green-300 bg-transparent hover:border-none text-green-700 hover:bg-green-700 hover:text-white"
              >
                mansion
              </button>
            </div>
          </div>
          <div>
            <h2 className=" font-medium mb-1 mt-2 lg:mt-0 text-lg">
              Filter By Contract
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => filterLease("rent")}
                className=" bg-orange-100 text-orange-500 rounded-2xl p-3  capitalize   hover:bg-orange-500 hover:text-orange-100"
              >
                rent
              </button>
              <button
                onClick={() => filterLease("sale")}
                className=" bg-green-100 text-green-700 rounded-2xl p-3  capitalize  hover:bg-green-700 hover:text-green-100"
              >
                sale
              </button>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {listing.map(
            ({ id, img, name, price, leaseType, location, duration }) => {
              return (
                <PropertiesCard
                  img={img}
                  name={name}
                  key={id}
                  price={price}
                  leaseType={leaseType}
                  location={location}
                  duration={duration}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

const PropertiesCard = ({
  name,
  img,
  price,
  location,
  leaseType,
  duration,
}) => {
  return (
    <div className=" ">
      <img
        src={img}
        alt={name}
        className=" w-full h-60 object-cover hover:scale-105 "
      />

      <div>
        <div className=" flex mt-2">
          <div
            className={
              leaseType === "rent"
                ? " bg-orange-100  rounded-md uppercase text-sm text-orange-500 p-2"
                : " bg-green-100  rounded-md uppercase text-sm text-green-500 p-2"
            }
          >
            {leaseType}
          </div>
        </div>
        <div className=" flex justify-between">
          <div className=" font-medium capitalize text-sm md:text-base ">
            {name}
          </div>
          <div className=" font-medium capitalize text-sm md:text-base ">
            &#x20A6; {price}{" "}
            {leaseType === "rent" && (
              <span className=" font-normal text-gray-500 text-sm capitalize">
                {" "}
                ({duration})
              </span>
            )}
          </div>
        </div>
        <p className="text-gray-500 capitalize -mt-1 text-sm md:text-base">
          {location}
        </p>
      </div>
    </div>
  );
};

export default Properties;
