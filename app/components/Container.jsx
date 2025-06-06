"use client";

import React, { useEffect, useState } from "react";
//test tanstack
import { useQuery } from "@tanstack/react-query";
import HouseCard from "./HouseCard";
import { Loader2Icon } from "lucide-react";

export default function Container(props) {
  const { houseQ } = props;

  // config params
  let qParams = "";
  if (houseQ !== "") qParams = "?name=" + houseQ.toLowerCase();

  // houses to display
  const [houses, setHouses] = useState();

  const fetchHouses = async () => {
    const res = await fetch("http://localhost:5000/api/houses" + qParams);
    console.log("http://localhost:5000/api/houses" + qParams);
    if (!res.ok) throw new Error("Error");
    return res.json();
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["houses", houseQ],
    queryFn: fetchHouses,
    staleTime: 6000,
  });

  if (isPending) {
    return (
      <Loader2Icon className="animate-spin absolute top-[50%] left-[50%] scale-200" />
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data);

  // fetch and display house cards
  // useEffect(() => {
  //   const controller = new AbortController();
  //   fetch("http://localhost:5000/api/houses" + qParams)
  //     .then((res) => res.json())
  //     .then((data) => setHouses(data))
  //     .catch((err) => console.error("Fetch error:", err));
  //   return () => controller.abort();
  // }, [houseQ]);

  return (
    <div className="w-full flex flex-col gap-4">
      {data.length > 0 ? (
        data.map((house) => <HouseCard key={house.id} house={house} />)
      ) : (
        <span className="mt-3">No house matches your search criteria.</span>
      )}
    </div>
  );
}
