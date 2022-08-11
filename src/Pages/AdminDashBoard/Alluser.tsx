import React, { useEffect, useState } from "react";

const Alluser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://secure-escarpment-79738.herokuapp.com/usersdata")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [user]);
  console.log(user);
  return (
    <section className="pt-4">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-primary text-center font-mono">
                    <th
                      className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               border-l border-transparent
                               font-mono
                               "
                    >
                      Name
                    </th>
                    <th
                      className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               font-mono
                               "
                    >
                      Email
                    </th>
                    <th
                      className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               "
                    >
                      Role
                    </th>
                    <th
                      className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               "
                    >
                      Delete User
                    </th>
                  </tr>
                </thead>
                {user.map((item) => (
                  <tbody>
                    <tr className="font-mono">
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-black
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                        {item.name}
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-black
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        {item.email}
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-black
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                        {item.role}
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-black
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <span
                          className="
                                   border-primary
                                  py-2
                                  px-2
                                  text-primary
                                  inline-block
                                  rounded
                                  hover:bg-primary hover:text-white
                                  "
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alluser;
