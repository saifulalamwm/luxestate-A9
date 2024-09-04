import React from "react";

const SectionTitle = ({ top, title }) => {
  return (
    <div className="w-11/12 text-center my-10">
      <p className="text-yellow-600 font-bold">----{top}----</p>
      <p className="text-4xl font-extrabold">{title}</p>
    </div>
  );
};

export default SectionTitle;
