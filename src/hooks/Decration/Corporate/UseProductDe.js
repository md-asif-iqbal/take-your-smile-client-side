import React, { useEffect, useState } from 'react';
const UseProductDe = (pro) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/ProductLunches/${pro}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [pro]);
    return [product];
  };
export default UseProductDe;