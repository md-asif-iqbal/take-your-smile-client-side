import React, { useEffect, useState } from "react";

const UseLocation = (id) => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/address/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, [id]);
  console.log(address);
  return [address];
};

export default UseLocation;
