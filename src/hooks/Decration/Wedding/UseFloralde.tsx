import React, { useEffect, useState } from "react";

const UseFloralde = (flow: any) => {
  const [floralDesign, setFloralDesign] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/floralDesign/${flow}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFloralDesign(data));
  }, [flow]);
  return [floralDesign];
};

export default UseFloralde;
