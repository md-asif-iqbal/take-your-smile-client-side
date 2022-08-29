import React, { useEffect, useState } from "react";

const UseBirthdayDe = (birth: any) => {
  const [birthday, setBirthday] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/anniversary/${birth}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBirthday(data));
  }, [birth]);
  return [birthday];
};
export default UseBirthdayDe;
