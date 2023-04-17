import React, { useState } from "react";
import PageTitle from "../shared/PageTitle/PageTitle";
import { properties } from "./constants/data";
import Card from "./Card";
import Loading from "../shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const AllGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [events, setEvents] = useState([]);
  const url = `https://take-your-smile-server-side.onrender.com/gallerys`;
  const {
    data: gallerys,
    isLoading,
    refetch,
  } = useQuery(["allparts"], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const filterItem = (categItem: any) => {
    const updatedItems = gallery.filter((item) => {
      return item.titleCode === categItem;
    });

    setEvents(updatedItems);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <PageTitle title="All Gallery" />
      <div className="Appes">
        <div className="propertiest">
          {gallerys.map((item) => (
            <Card data={item} key={item.date} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGallery;
