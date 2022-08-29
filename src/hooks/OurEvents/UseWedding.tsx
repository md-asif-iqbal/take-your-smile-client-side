import React, { useEffect, useState } from 'react';

const UseWedding = () => {
    const [wedding, setWedding] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/wedding";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWedding(data));
  }, []);
    return [wedding]
};

export default UseWedding;