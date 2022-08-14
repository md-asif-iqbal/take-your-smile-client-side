import React, { useEffect, useState } from "react";

const UseCorporate = () => {
  const [corporate, setCorporat] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8000/corporate";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCorporat(data));
  }, []);
  return [corporate];
};
export default UseCorporate;
