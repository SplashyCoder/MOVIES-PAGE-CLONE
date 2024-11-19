"use client";
import { moviesInterface } from "@/types/interfaces";
import React, { createContext, useContext, useState } from "react";

interface DataContextProps {
  data: moviesInterface[];
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const DataContext = createContext<DataContextProps | []>([]);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
