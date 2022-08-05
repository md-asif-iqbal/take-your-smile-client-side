import React, { useEffect, useState } from "react";

const UseWeddingDec = (wedd) => {
  const [weddings, setWedding] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/weddingceremony/${wedd}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWedding(data));
  }, [wedd]);
  return [weddings];
};

export default UseWeddingDec;
