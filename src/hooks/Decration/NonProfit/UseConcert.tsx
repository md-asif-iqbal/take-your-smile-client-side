import React, { useEffect, useState } from "react";

const UseConcert = (con: any) => {
  const [concert, setConcert] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/concert/${con}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setConcert(data));
  }, [con]);
  return [concert];
};

export default UseConcert;
