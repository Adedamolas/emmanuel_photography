import React, { useState, useEffect } from "react";
import { generalSansLight } from "../../../styles/fonts";

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return prevCount;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex justify-center items-center">
      <h1
        className={`text-[5rem] font-bold text-black ${generalSansLight.className}`}
      >
        {count}%
      </h1>
    </div>
  );
};

export default Preloader;
