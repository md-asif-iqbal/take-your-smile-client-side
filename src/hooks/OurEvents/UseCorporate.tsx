import React, { useEffect, useState } from "react";

const UseCorporate = () => {
  const [corporate, setCorporat] = useState([]);
  useEffect(() => {
    const url = "https://take-your-smile-server-side.onrender.com/corporate";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCorporat(data));
  }, []);
  return [corporate];
};
export default UseCorporate;
