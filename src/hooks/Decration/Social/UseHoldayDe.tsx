import React, { useEffect, useState } from "react";

const UseHoldayDe = (holy: any) => {
  const [holyday, setHolyday] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/holiday/${holy}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHolyday(data));
  }, [holy]);
  return [holyday];
};

export default UseHoldayDe;
