import React, { useEffect, useState } from 'react';
const UseProductDe = (pro) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      const url = `http://localhost:8000/ProductLunches/${pro}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [pro]);
    return [product];
  };
export default UseProductDe;