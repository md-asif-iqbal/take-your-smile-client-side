import React, { useEffect, useState } from "react";
const UseNonProfitEvents = () => {
  const [nonPropit, setnonPropit] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/nonprofit";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnonPropit(data));
  }, []);
  return [nonPropit];
};

export default UseNonProfitEvents;
