"use client";

import { useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import Results from "@/components/Results";
import { useDataContext } from "@/context/DataContext";

const Home = () => {
  const { data } = useDataContext();

  return (
    <div>
      <Results movies={data} />
    </div>
  );
};

export default Home;
