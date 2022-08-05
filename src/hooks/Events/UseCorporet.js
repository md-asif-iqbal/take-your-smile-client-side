import React, { useEffect, useState } from 'react';

const UseCorporet = (id) => {
    const [corporate, setCorporate] = useState([]);

    useEffect(() => {
        const url = `https://secure-escarpment-79738.herokuapp.com/corporate/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setCorporate(data));
      }, [id]);
      return [corporate];
};

export default UseCorporet;