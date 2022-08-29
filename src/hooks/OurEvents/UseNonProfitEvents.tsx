import React, { useEffect, useState } from "react";
const UseNonProfitEvents = () => {
  const [nonPropit, setnonPropit] = useState([]);

  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/nonprofit";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnonPropit(data));
  }, []);
  return [nonPropit];
};

export default UseNonProfitEvents;
