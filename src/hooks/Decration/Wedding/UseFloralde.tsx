import React, { useEffect, useState } from "react";

const UseFloralde = (flow: any) => {
  const [floralDesign, setFloralDesign] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/floralDesign/${flow}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFloralDesign(data));
  }, [flow]);
  return [floralDesign];
};

export default UseFloralde;
