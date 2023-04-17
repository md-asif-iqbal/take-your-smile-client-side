import React, { useEffect, useState } from "react";

const UseFashionDe = (fas: any) => {
  const [FashionDe, setFashionDe] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/FashionCarnival/${fas}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFashionDe(data));
  }, [fas]);
  return [FashionDe];
};

export default UseFashionDe;
