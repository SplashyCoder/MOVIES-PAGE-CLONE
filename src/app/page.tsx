"use client";

import { useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import Results from "@/components/Results";

const Home = () => {
  // const [url, setUrl] = useState("/movie/top_rated");
  // const { data, loading } = useFetch(url);

  // const handleFetchTopRated = () => {
  //   setUrl("/movie/top_rated"); // Cambia según tu preferencia
  // };

  // const handleFetchPopular = () => {
  //   setUrl("/trending/all/week"); // Cambia según tu preferencia
  // };
  // if (loading) return <p>Loading...</p>;
  // if (!data) return <p>No data available</p>;

  return (
    <div>
      {/* <button className="border border-amber-500" onClick={handleFetchTopRated}>
        Load Top Rated
      </button>
      <br />
      <button className="border border-amber-500" onClick={handleFetchPopular}>
        Load Popular
      </button> */}
      {/* <Results movies={data} /> */}
    </div>
  );
};

export default Home;
