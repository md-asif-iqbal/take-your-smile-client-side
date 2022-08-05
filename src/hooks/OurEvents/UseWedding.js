import React, { useEffect, useState } from 'react';

const UseWedding = () => {
    const [wedding, setWedding] = useState([]);

  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/wedding";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWedding(data));
  }, []);
    return [wedding]
};

export default UseWedding;