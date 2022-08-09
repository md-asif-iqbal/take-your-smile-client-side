import React, { useEffect, useState } from 'react';

const UseWedding = (id) => {
    const [wedding, setWedding] = useState([]);

    useEffect(() => {
        const url = `http://localhost:8000/wedding/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setWedding(data));
      }, [id]);
      return [wedding];
};

export default UseWedding;