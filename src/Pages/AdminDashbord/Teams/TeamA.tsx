import React, { useEffect, useState } from "react";
import Card from "./Card";

const TeamA = () => {
  const [teamA, setTeamA] = useState([]);
  const [team, setTeam]: any = useState([]);
  useEffect(() => {
    const url = "https://take-your-smile-server-side.onrender.com/teams";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTeamA(data);
        setTeam(data);
        filterItem(data);
      });
  }, [team]);

  const filterItem = (categItem: any) => {
    const updatedItems = teamA.filter((item) => {
      return item.group === "A";
    });
    setTeam(updatedItems);
  };

  return (
    <div>
      {team?.map((item: any) => (
        <Card item={item}></Card>
      ))}
    </div>
  );
};

export default TeamA;
