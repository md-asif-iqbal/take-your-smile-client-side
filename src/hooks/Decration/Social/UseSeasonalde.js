import React, { useEffect, useState } from 'react';

const UseSeasonalde = (sean) => {
    const [seasonal, setSeasonal] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/seasonal/${sean}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setSeasonal(data));
    }, [sean]);
    return [seasonal];
  };

export default UseSeasonalde;