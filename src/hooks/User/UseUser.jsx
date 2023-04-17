import { useEffect, useState } from "react";
const useUser = (user) => {
  const [users, setUser] = useState();
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://take-your-smile-server-side.onrender.com/user/${email}`, {
        methodd: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setUserLoading(false);
        });
    }
  }, [user]);

  return [users, userLoading];
};
export default useUser;
