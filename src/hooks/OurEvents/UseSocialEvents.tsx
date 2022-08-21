import React, { useEffect, useState } from "react";

const UseSocialEvents = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const url = "https://secure-escarpment-79738.herokuapp.com/social";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSocial(data));
  }, []);
  return [social];
};

export default UseSocialEvents;
