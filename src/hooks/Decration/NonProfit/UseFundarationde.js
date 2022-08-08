import React, { useEffect, useState } from 'react';

const UseFundarationde = (fund) => {
    const [fundrasing, setFundrasing] = useState([]);
    useEffect(() => {
      const url = `http://localhost:8000/Fundraising/${fund}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFundrasing(data));
    }, [fund]);
    return [fundrasing];
}
export default UseFundarationde;