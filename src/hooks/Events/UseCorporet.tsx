import React, { useEffect, useState } from "react";

const UseCorporet = (id: any) => {
  const [corporate, setCorporate] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8000/corporate/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCorporate(data));
  }, [id]);
  return [corporate];
};

export default UseCorporet;
