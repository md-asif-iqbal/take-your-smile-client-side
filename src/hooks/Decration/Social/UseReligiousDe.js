import React, { useEffect, useState } from "react";

const UseReligiousDe = (reli) => {
  const [religious, setReligious] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/holiday/${reli}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReligious(data));
  }, [reli]);
  return [religious];
};

export default UseReligiousDe;
