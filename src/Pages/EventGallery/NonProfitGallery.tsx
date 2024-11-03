import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PageTitle from "../shared/PageTitle/PageTitle";
import Card from "./Card";
const NonProfitGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://take-your-smile-server-side.onrender.com/gallerys")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setEvents(data);
        filterItem(data);
      });
  }, [events]);

  //   console.log(gallery);

  const filterItem = (categItem: any) => {
    const updatedItems = gallery.filter((item) => {
      return item.titleCode === "non-profit";
    });
    setEvents(updatedItems);
    console.log(events);
  };

  return (
    <div>
      <div>
        <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
            <div className="propertiest">
              {events?.map((item) => (
                <Card data={item} key={item._id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NonProfitGallery;
