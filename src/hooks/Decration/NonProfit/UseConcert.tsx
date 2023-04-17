import React, { useEffect, useState } from "react";

const UseConcert = (con: any) => {
  const [concert, setConcert] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/concert/${con}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setConcert(data));
  }, [con]);
  return [concert];
};

export default UseConcert;
