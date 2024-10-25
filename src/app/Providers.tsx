"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className="">{children}</div>
    </ThemeProvider>
  );
};