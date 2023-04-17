import React, { useEffect, useState } from "react";

const UseCorporet = (id: any) => {
  const [corporate, setCorporate] = useState([]);

  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/corporate/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCorporate(data));
  }, [id]);
  return [corporate];
};

export default UseCorporet;
