import React, { useEffect, useState } from 'react';

const UseFairsde = (fair) => {
    const [fairs, setFairs] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/fairsExpos/${fair}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFairs(data));
    }, [fair]);
    return [fairs];
};

export default UseFairsde;