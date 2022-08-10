import React, { useEffect, useState } from 'react';

const UseSocial = (id) => {
    const [social, setSocial] = useState([]);

    useEffect(() => {
        const url = `http://localhost:8000/social/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setSocial(data));
      }, [id]);
      return [social];
};

export default UseSocial;