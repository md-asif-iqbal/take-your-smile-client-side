import React, { useEffect, useState } from "react";

const UseSeasonalde = (sean: any) => {
  const [seasonal, setSeasonal] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/seasonal/${sean}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSeasonal(data));
  }, [sean]);
  return [seasonal];
};

export default UseSeasonalde;
