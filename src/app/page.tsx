// import React from "react";
// import { searchParams } from "@/types/inferfaces";
// import Results from "@/components/ Results";
// import { moviesInterface } from "@/types/inferfaces";

// const API_KEY = process.env.API_KEY;

// const Home = async ({ genre }: searchParams) => {
//   const fetchTrending = "fetchTrending";
//   const fetchTopRated = "fetchTopRated";
//   const movieTop = `/movie/top_rated`;
//   const trending = `/trending/all/week`;

//   const paramsGenre = fetchTopRated || fetchTrending;

//   const fetchData = async () => {
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3${
//           paramsGenre === fetchTopRated ? movieTop : trending
//         }?api_key=${API_KEY}&language=en-US&page=1`
//       );
//       const data = await res.json(); // Awaiting the response JSON
//       return data.results;
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     }
//   };

//   const results: moviesInterface[] = await fetchData();
//   console.log(results);

//   return (
//     <div>
//       <Results movies={results} />
//     </div>
//   );
// };

// export default Home;

// "use client";

// import useFetch from "@/hooks/useFetch";

// const Home = () => {
//   const { data, loading } = useFetch("/movie/top_rated");

//   if (loading) return <p>Loading...</p>;

//   if (!data) return <p>No data available</p>;

//   return (
//     <div>
//       {/* Render your data here */}
//       <p>Data: {JSON.stringify(data)}</p>
//     </div>
//   );
// };

// export default Home;

"use client";

import { useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import Results from "@/components/Results";

const Home = () => {
  const [url, setUrl] = useState("/movie/top_rated");
  const { data, loading } = useFetch(url);

  const handleFetchTopRated = () => {
    setUrl("/movie/top_rated"); // Cambia según tu preferencia
  };

  const handleFetchPopular = () => {
    setUrl("/trending/all/week"); // Cambia según tu preferencia
  };
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <button className="border border-amber-500" onClick={handleFetchTopRated}>
        Load Top Rated Pokémon
      </button>
      <br />
      <button className="border border-amber-500" onClick={handleFetchPopular}>
        Load Popular Pokémon
      </button>
      <Results movies={data} />
      {/* <ul>Data: {JSON.stringify(data)}</ul> */}
    </div>
  );
};

export default Home;
