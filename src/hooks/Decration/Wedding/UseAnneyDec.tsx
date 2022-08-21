import React, { useEffect, useState } from "react";
const UseAnneyDec = (anny: any) => {
  const [annerversary, setAnnerversary] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/anniversary/${anny}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnnerversary(data));
  }, [anny]);
  return [annerversary];
};
export default UseAnneyDec;
