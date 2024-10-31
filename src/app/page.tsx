import React from "react";
import { searchParams } from "@/types/inferfaces";

const API_KEY = process.env.API_KEY;

const Home = async ({ genre }: searchParams) => {
  const fetchTrending = "fetchTrending";
  const movieTop = `/movie/top_rated`;
  const trending = `/trending/all/week`;

  const paramsGenre = genre || fetchTrending;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3${
          paramsGenre === fetchTrending ? movieTop : trending
        }?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json(); // Awaiting the response JSON
      return data.results;
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const result = await fetchData();
  console.log(result.original_title);

  return (
    <div>
      {/* {result.map((res) => {
        return <div key={res.id}>{res.title}</div>;
      })} */}
    </div>
  );
};

export default Home;
