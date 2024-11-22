import React from "react";
import { moviesInterface } from "@/types/interfaces";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

const Card = ({
  title,
  name,
  release_date,
  first_air_date,
  poster_path,
  backdrop_path,
  vote_average,
  vote_count,
}: moviesInterface) => {
  return (
    <div
      // className=" flex flex-col items-center justify-center border border-amber-600 m-2 p-2 rounded "
      className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-amber-400 sm:m-2 overflow-hidden max-w-48"
      // className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          backdrop_path || poster_path
        }`}
        width={200}
        height={100}
        className="sm:rounded group-hover:opacity-75 transition-opacity duration-300"
        alt="Movie poster"
      ></Image>

      <div className=" border p-4">
        <h1 className="text-lg font-bold truncate">{title || name}</h1>
        <p>{release_date || first_air_date}</p>
        <p>{vote_average}</p>
        <div className="flex items-center justify-center gap-1">
          <AiOutlineLike />
          <p>{vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
