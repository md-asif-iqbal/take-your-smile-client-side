import React, { useEffect, useState } from 'react';

const UseNewYear = (newy) => {
    const [newYear, setNewYear] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/NewYearEvents/${newy}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setNewYear(data));
    }, [newy]);
    return [newYear];
  };

export default UseNewYear;