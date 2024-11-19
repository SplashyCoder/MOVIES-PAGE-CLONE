import React from "react";
import { moviesInterface } from "@/types/interfaces";
import Card from "./Card";

interface result {
  movies: moviesInterface[];
}

const Results = ({ movies }: result) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {movies.map((i) => {
        return (
          <div
            key={i.id}
            className=" flex flex-col items-center justify-center"
          >
            <Card {...i} />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
