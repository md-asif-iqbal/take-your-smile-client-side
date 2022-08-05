import React, { useEffect, useState } from 'react';

const UseNonProfit = (id) => {
    const [nonProfit, setNonProfit] = useState([]);

    useEffect(() => {
        const url = `https://secure-escarpment-79738.herokuapp.com/nonprofit/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setNonProfit(data));
      }, [id]);
      return [nonProfit];
};

export default UseNonProfit;