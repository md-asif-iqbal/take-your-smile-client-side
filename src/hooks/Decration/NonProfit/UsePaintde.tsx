import React, { useEffect, useState } from "react";

const UsePaintde = (pain) => {
  const [paintJam, setPaintJam] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/PaintJam/${pain}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPaintJam(data));
  }, [pain]);
  return [paintJam];
};

export default UsePaintde;
