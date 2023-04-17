import React, { useEffect, useState } from "react";

const UseWeddingDec = (wedd: any) => {
  const [weddings, setWedding] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/weddingceremony/${wedd}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWedding(data));
  }, [wedd]);
  return [weddings];
};

export default UseWeddingDec;
