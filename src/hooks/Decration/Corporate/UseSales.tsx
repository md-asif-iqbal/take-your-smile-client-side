import React, { useEffect, useState } from "react";

const UseSales = (sale: any) => {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/SalesEvents/${sale}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, [sale]);
  return [sales];
};

export default UseSales;
