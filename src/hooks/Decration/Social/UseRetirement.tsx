import React, { useEffect, useState } from "react";

const UseRetirement = (reti: any) => {
  const [retirement, setRetirement] = useState([]);
  useEffect(() => {
    const url = `https://take-your-smile-server-side.onrender.com/retirement/${reti}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRetirement(data));
  }, [reti]);
  return [retirement];
};

export default UseRetirement;
