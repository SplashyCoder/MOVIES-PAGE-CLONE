"use client";
<<<<<<< HEAD

import { moviesInterface } from "@/types/interfaces";
=======
import { useState, useEffect } from "react";
import { moviesInterface } from "@/types/inferfaces";
>>>>>>> tangent

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// hooks/useFetch.ts

const useFetch = (url: string) => {
  const [data, setData] = useState<moviesInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3${url}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        setData(data.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
