import React, { useEffect, useState } from "react";

const UseLocation = (id) => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/address/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, [id]);
  return [address];
};

export default UseLocation;
