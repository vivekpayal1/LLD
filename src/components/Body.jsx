import { Children, useState } from "react";
import { useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const MEME_API = "https://meme-api.com/gimme/10";
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    fetchMeme();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMeme();
    }
  };
  const fetchMeme = async () => {
    try {
      setShowShimmer(true);
      const data = await fetch(MEME_API);
      const res = await data.json();
      setShowShimmer(false);
      setMemes((memes) => [...memes, ...res.memes]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {memes.map((meme, index) => {
        return <MemeCard key={index} data={meme} />;
      })}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
