import React, { useEffect, useState } from "react";
const UseSocial = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8000/social";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSocial(data));
  }, []);
  return [social];
};

export default UseSocial;
