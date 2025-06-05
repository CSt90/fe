"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const HouseCard = (props) => {
  const {
    id,
    name,
    houseColours,
    founder,
    animal,
    element,
    ghost,
    commonRoom,
    heads,
    traits,
  } = props.house;

  const gradient =
    houseColours
      .toLowerCase()
      .split(" and ")
      .map((c) => c.trim()) ?? [];
  const isValidColor = (colorName) => CSS.supports("color", colorName);
  let colors = [];
  colors =
    isValidColor(gradient[0]) && isValidColor(gradient[1])
      ? gradient
      : ["white", "black"];

  const [traitsFilter, setTraitsFilter] = useState("");
  const [fTraits, setFTraits] = useState(traits);
  let filteredTraits = traits;

  const handleFilterTraits = (text) => {
    setTraitsFilter(text);
    if (text !== "") {
      filteredTraits = traits.filter((trait) => trait.name.includes(text));
      setFTraits(filteredTraits);
    } else setFTraits(traits);

    console.log(traitsFilter);
  };

  return (
    <div>
      <Card className="w-full max-w-[28rem] min-w-[22rem] gap-2">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardAction className="-mt-[0.3rem]">
            <span className="text-sm">{animal}</span>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div
              className={`h-6 rounded-sm`}
              style={{
                background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
              }}
            ></div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>
                  Founder: <b>{founder}</b>
                </Label>
              </div>
              <Input
                type="text"
                placeholder="Search house traits"
                className="w-[64%] rounded-lg text-[0.86rem]"
                value={traitsFilter}
                onChange={(event) => handleFilterTraits(event.target.value)}
              />
              <div className="flex flex-row flex-wrap gap-2 justify-items-start justify-start">
                {fTraits
                  ? fTraits.map((trait) => (
                      <Badge
                        key={trait.id}
                        variant="secondary"
                        className="bg-zinc-800/95 text-amber-50"
                      >
                        {trait.name}
                      </Badge>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HouseCard;
