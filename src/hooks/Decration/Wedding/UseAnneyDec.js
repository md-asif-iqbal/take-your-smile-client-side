import React, { useEffect, useState } from "react";
const UseAnneyDec = (anny) => {
  const [annerversary, setAnnerversary] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/anniversary/${anny}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnnerversary(data));
  }, [anny]);
  return [annerversary];
};
export default UseAnneyDec;
