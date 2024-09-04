import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router-dom";
import OfferCard from "./OfferCard";

const Offer = () => {
  const residential = useLoaderData();

  console.log(residential);
  const [searchName, setSearchName] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchArea, setSearchArea] = useState("");
  const [searchFacilities, setSearchFacilities] = useState("");

  const handleSearch = () => {
    let filteredResidential = residential;

    if (searchName) {
      filteredResidential = filteredResidential.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchPrice) {
      filteredResidential = filteredResidential.filter(
        (item) => item.price <= parseFloat(searchPrice)
      );
    }

    if (searchArea) {
      filteredResidential = filteredResidential.filter((item) =>
        item.area.toLowerCase().includes(searchArea.toLowerCase())
      );
    }

    if (searchFacilities) {
      filteredResidential = filteredResidential.filter((item) =>
        item.facilities.some((facility) =>
          facility.toLowerCase().includes(searchFacilities.toLowerCase())
        )
      );
    }

    return filteredResidential;
  };

  const filteredResidential = handleSearch();

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 my-5">
          <input
            type="text"
            placeholder="Property Name"
            className="input input-bordered"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="input input-bordered"
            value={searchPrice}
            onChange={(e) => setSearchPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location Size"
            className="input input-bordered"
            value={searchArea}
            onChange={(e) => setSearchArea(e.target.value)}
          />
          <input
            type="text"
            placeholder="Facilities"
            className="input input-bordered"
            value={searchFacilities}
            onChange={(e) => setSearchFacilities(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      <SectionTitle top={"What We Offer"} title={"Exclusive Offer For You"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {filteredResidential.length > 0 ? (
          filteredResidential.map((item, index) => (
            <OfferCard key={index} item={item} />
          ))
        ) : (
          <p>No properties found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Offer;
