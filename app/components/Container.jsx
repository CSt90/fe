"use client";

import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard";
import { Loader2Icon } from "lucide-react";

export default function Container(props) {
  const { houseQ } = props;

  // config params
  let qParams = "";
  if (houseQ !== "") qParams = "?name=" + houseQ;

  // houses to display
  const [houses, setHouses] = useState();

  // fetch and display house cards
  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:5000/api/houses" + qParams)
      .then((res) => res.json())
      .then((data) => setHouses(data))
      .catch((err) => console.error("Fetch error:", err));
    return () => controller.abort();
  }, [houseQ]);

  return (
    <div className="w-full flex flex-col gap-4">
      {houses ? (
        houses.map((house) => <HouseCard key={house.id} house={house} />)
      ) : (
        <Loader2Icon className="animate-spin absolute top-[50%] left-[50%] scale-200" />
      )}
    </div>
  );
}
