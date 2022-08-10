import React, { useEffect, useState } from "react";

const UseFashionDe = (fas) => {
  const [FashionDe, setFashionDe] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/FashionCarnival/${fas}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFashionDe(data));
  }, [fas]);
  return [FashionDe];
};

export default UseFashionDe;
