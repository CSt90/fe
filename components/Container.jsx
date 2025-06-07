"use client";

//test tanstack to fetch from api
import { useQuery } from "@tanstack/react-query";
import HouseCard from "./HouseCard";
import { Loader2Icon } from "lucide-react";

export default function Container(props) {
  const { houseQ } = props;

  // config params
  let qParams = "";
  if (houseQ !== "") qParams = "?name=" + houseQ.toLowerCase();

  // switch api url
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api"
      : process.env.API_URL;

  console.log(process.env.NODE_ENV);

  const fetchHouses = async () => {
    const res = await fetch(`${API_URL}/houses${qParams}`);
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
