import React, { useEffect, useState } from 'react';

const UseSales = (sale) => {
    const [sales, setSales] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/SalesEvents/${sale}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setSales(data));
    }, [sale]);
    return [sales];
  };

export default UseSales;