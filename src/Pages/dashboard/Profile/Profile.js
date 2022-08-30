import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
const Profile = () => {
  const [user] = useAuthState(auth);
  const [users, setUser] = useState([]);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://secure-escarpment-79738.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [user]);
  return (
    <div className="p-6 mx-auto rounded-md md:mt-20 lg:mt-20">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body min-w-full">
          <h2 className="text-center text-xl font-bold mb-5">My Profile</h2>
          <div>
            <label tabIndex="0" className=" btn-circle avatar flex">
              <div className="w-24 rounded-full">
                {users?.image ? (
                  <img src={users?.image} alt={users?.name} />
                ) : (
                  <img
                    className="object-cover w-16 h-16 rounded-full"
                    src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg"
                    alt="..."
                  />
                )}
              </div>
            </label>
            <ul>
              <li className="my-2 font-bold ">
                Full Name: <span className="text-accent">{users?.name}</span>
              </li>
              <li className="my-2 font-bold ">
                User Name:{" "}
                <span className="text-accent">
                  {users?.userName ? users?.userName : "add user name"}
                </span>
              </li>
              <li className="my-2 font-bold ">
                Email: <span className="text-accent">{users?.email}</span>
              </li>
              <li className="font-bold ">
                Phone Number:{" "}
                <span className="text-accent">
                  {users?.phone ? users?.phone : "018*****"}
                </span>
              </li>
              <li className="font-bold ">
                Company Name:{" "}
                <span className="text-secondary">
                  {users?.company ? users?.company : "xyz company"}
                </span>
              </li>
              <li className="font-bold ">
                Location:{" "}
                <span className="font-bold text-accent">{users?.division}</span>{" "}
                &gt;&gt;{" "}
                <span className="font-bold text-accent">{users?.distic}</span>
              </li>
            </ul>
          </div>

          <div
          // data-aos="flip-right"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000" 
           className="text-center">
            <NavLink to="update">
              <button className="btn btn-block btn-primary  text-white">
                Update Profile
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
