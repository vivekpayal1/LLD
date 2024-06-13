import { useState } from "react";
import { useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const MEME_API = "https://meme-api.com/gimme/10";
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    fetchMeme();
  }, []);
  const fetchMeme = async () => {
    try {
      const data = await fetch(MEME_API);
      const res = await data.json();
      setMemes(res.memes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, index) => {
          return <MemeCard key={index} data={meme} />;
        })
      )}
    </div>
  );
};

export default Body;
