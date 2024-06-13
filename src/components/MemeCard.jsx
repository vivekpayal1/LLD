import React from "react";

const MemeCard = ({ data }) => {
  const { title, url, author } = data;
  return (
    <div className="border border-black ">
      <img src={url} alt={title + "img"} className="h-[200px] w-full" />
      <h2 className="font-bold">{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
