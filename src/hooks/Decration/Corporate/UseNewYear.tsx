import React, { useEffect, useState } from "react";

const UseNewYear = (newy: any) => {
  const [newYear, setNewYear] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/NewYearEvents/${newy}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewYear(data));
  }, [newy]);
  return [newYear];
};

export default UseNewYear;
