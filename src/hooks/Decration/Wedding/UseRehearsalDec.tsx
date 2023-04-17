import React, { useEffect, useState } from "react";

const UseRehearsalDec = (reh: any) => {
  const [reharsal, setReharsal] = useState([reh]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/weddingceremony/${reh}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReharsal(data));
  }, [reh]);
  return [reharsal];
};

export default UseRehearsalDec;
