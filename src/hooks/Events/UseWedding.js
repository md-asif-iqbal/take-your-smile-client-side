import React, { useEffect, useState } from 'react';

const UseWedding = (id) => {
    const [wedding, setWedding] = useState([]);

    useEffect(() => {
        const url = `https://secure-escarpment-79738.herokuapp.com/wedding/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setWedding(data));
      }, [id]);
      return [wedding];
};

export default UseWedding;