import React, { useEffect, useState } from "react";
const UseProductDe = (pro: any) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/ProductLunches/${pro}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [pro]);
  return [product];
};
export default UseProductDe;
