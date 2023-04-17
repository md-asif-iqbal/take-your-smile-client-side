import React, { useEffect, useState } from "react";

const UseEnngament = (enng: any) => {
  const [enngament, setEnngment] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/engagement/${enng}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEnngment(data));
  }, [enng]);
  return [enngament];
};

export default UseEnngament;
