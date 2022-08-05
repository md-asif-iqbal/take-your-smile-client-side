import React, { useEffect, useState } from 'react';

const UseHoldayDe = (holy) => {
    const [holyday, setHolyday] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/holiday/${holy}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setHolyday(data));
    }, [holy]);
    return [holyday];
  }

export default UseHoldayDe;