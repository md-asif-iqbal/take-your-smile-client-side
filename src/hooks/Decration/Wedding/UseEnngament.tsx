import React, { useEffect, useState } from "react";

const UseEnngament = (enng: any) => {
  const [enngament, setEnngment] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/engagement/${enng}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEnngment(data));
  }, [enng]);
  return [enngament];
};

export default UseEnngament;
