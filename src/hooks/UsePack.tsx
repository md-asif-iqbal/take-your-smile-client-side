import React, { useEffect, useState } from 'react';

const UsePack = () => {
    const [packages, setPackages] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8000/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return [packages]
};

export default UsePack;