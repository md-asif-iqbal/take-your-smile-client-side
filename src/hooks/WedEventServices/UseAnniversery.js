import React, { useEffect, useState } from 'react';

const UseAnniversery = (id) => {
    const [anniver, setAnniver] = useState([]);
    useEffect(() => {
        const url = `https://secure-escarpment-79738.herokuapp.com/wedding/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setAnniver(data));
      }, [id]);
      return [anniver];
};

export default UseAnniversery;