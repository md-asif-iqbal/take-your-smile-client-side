import React, { useEffect, useState } from "react";
const UseAnniversery = (id: any) => {
  const [anniver, setAnniver] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/wedding/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnniver(data));
  }, [id]);
  return [anniver];
};
export default UseAnniversery;
