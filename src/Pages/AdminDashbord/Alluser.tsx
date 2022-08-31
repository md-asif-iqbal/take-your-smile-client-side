import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Alluser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://secure-escarpment-79738.herokuapp.com/usersdata")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [user]);
  console.log(user);

  const handleDelete = (id: string) => {
    const proced = window.confirm("Are Your Sure Delete This User");
    if (proced) {
      const url = `https://secure-escarpment-79738.herokuapp.com/usersData/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
       
          const reamingData = user.filter((user: any) => user._id !== id);
          setUser(reamingData);
          console.log('yes');
          
          toast.success("Succesfully Delete User");
        });
    }
  };
  console.log(user);
  
  return (
    <section className="pt-4 lg:mt-40 mt-20 w-full">
      <div className="w-8/12 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto rounded-md">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-900 text-center font-mono ">
                    <th
                      className="
                               
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-4
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
                                text-lg font-semibold text-white py-4 lg:py-4 px-3 lg:px-4 font-mono
                               "
                    >
                      Email
                    </th>
                    <th
                      className="
                               
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
                    >
                      Role
                    </th>
                    <th
                      className="
                               
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-4
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
                               text-secondary
                               py-5
                               px-2
                               
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                        {item.name}
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5
                               px-2
                               
                               border-b border-[#E8E8E8]
                               "
                      >
                        {item.email}
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5
                               px-2
                               
                               border-b border-[#E8E8E8]
                               "
                      >
                        {item.role}
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-secondary
                               py-5
                               px-2
                              
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <span onClick={() => handleDelete(item._id)}
                          className=" cursor-wait
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
