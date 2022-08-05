import React, { useEffect, useState } from "react";

const UseEducationDe = (edu) => {
    const [educational, SetEducational] = useState([]);
    useEffect(() => {
      const url = `https://secure-escarpment-79738.herokuapp.com/EducationalSeminar/${edu}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => SetEducational(data));
    }, [edu]);
    return [educational];
  };

export default UseEducationDe;