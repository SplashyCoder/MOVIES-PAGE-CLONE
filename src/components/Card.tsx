import React from "react";
import { moviesInterface } from "@/types/interfaces";

const Card = ({
  title,
  name,
  release_date,
  first_air_date,
}: moviesInterface) => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <p>{title || name}</p>
      <p>{release_date || first_air_date}</p>
    </div>
  );
};

export default Card;
