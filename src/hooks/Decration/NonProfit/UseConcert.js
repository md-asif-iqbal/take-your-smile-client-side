import React, { useEffect, useState } from 'react';

const UseConcert = (con) => {
    const [concert, setConcert] = useState([]);
    useEffect(() => {
      const url = `http://localhost:8000/concert/${con}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setConcert(data));
    }, [con]);
    return [concert];
};

export default UseConcert;