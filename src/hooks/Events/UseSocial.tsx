import React, { useEffect, useState } from "react";

const UseSocial = (id: any) => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/social/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSocial(data));
  }, [id]);
  return [social];
};

export default UseSocial;
