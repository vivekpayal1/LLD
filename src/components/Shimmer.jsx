import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, index) => {    
          return <div key={index} className="bg-gray-200 h-40 w-full border border-black"></div>;
        })}
    </>
  );
};

export default Shimmer;
