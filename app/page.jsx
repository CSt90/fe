"use client";

import { Input } from "@/components/ui/input";
import Container from "./components/Container";
import { useState } from "react";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function Home() {
  const [houseFilter, setHouseFilter] = useState("");

  const queryClient = new QueryClient();

  return (
    <div
      className="flex flex-col items-start justify-items-start min-h-screen px-8 pt-2 pb-20 gap-4"
      style={{ fontFamily: "Verdana" }}
    >
      <Input
        className="px-2 py-5 text-xs w-[15.8rem] self-start"
        type="text"
        placeholder="Search houses"
        value={houseFilter}
        onChange={(event) => setHouseFilter(event.target.value)}
        style={{ fontFamily: "Verdana, sans serif" }}
      />
      <main className="flex flex-col gap-4">
        <QueryClientProvider client={queryClient}>
          {/* <Todos /> */}
          <Container houseQ={houseFilter} />
        </QueryClientProvider>
      </main>
    </div>
  );
}
