import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuAreaChart } from "react-icons/lu";
import { Link } from "react-router-dom";

const OfferCard = ({ item }) => {
  const {
    id,
    name,
    category,
    description,
    location,
    image,
    price,
    area,
    status,
    facilities,
  } = item;

  //   const handleDetails = (id) => {
  //     console.log(id);
  //   };
  return (
    <div>
      <div className=" card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p className="flex gap-2 items-center flex-grow">
              <IoLocationOutline />
              {location}
            </p>
            <p>{category}</p>
          </div>
          <div className=" border-t border-gray-200"></div>
          <div className="flex gap-2 items-center justify-start">
            <p>Location Size</p>
            <LuAreaChart />
            {area}
          </div>
          <div className="">
            {facilities.map((facility, index) => (
              <button
                key={index}
                className="text-xs bg-base-200 p-1 rounded-md m-1"
              >
                {facility}
              </button>
            ))}
          </div>

          <p className="text-xs">{description}</p>
          <div className=" border-t border-gray-200"></div>
          <div className="flex justify-between items-center my-5">
            <div className="">
              <div className="">
                <p className="text-xl font-semibold text-gray-400 capitalize">
                  {status}{" "}
                </p>
              </div>
              <div className="text-xl text-gray-500 font-bold">{price}</div>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/details/${id}`}>
                <button
                  // onClick={() => handleDetails(id)}
                  className="border-2 rounded-lg py-3 px-4"
                >
                  View Property
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
