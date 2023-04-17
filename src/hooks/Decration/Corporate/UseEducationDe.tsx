import React, { useEffect, useState } from "react";

const UseEducationDe = (edu: any) => {
  const [educational, SetEducational] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/EducationalSeminar/${edu}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetEducational(data));
  }, [edu]);
  return [educational];
};

export default UseEducationDe;
