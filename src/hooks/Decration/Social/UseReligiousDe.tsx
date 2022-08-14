import React, { useEffect, useState } from "react";

const UseReligiousDe = (reli: any) => {
  const [religious, setReligious] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/holiday/${reli}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReligious(data));
  }, [reli]);
  return [religious];
};

export default UseReligiousDe;
