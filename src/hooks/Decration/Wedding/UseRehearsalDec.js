import React, { useEffect, useState } from "react";

const UseRehearsalDec = (reh) => {
  const [reharsal, setReharsal] = useState([reh]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/weddingceremony/${reh}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReharsal(data));
  }, [reh]);
  return [reharsal];
};

export default UseRehearsalDec;
