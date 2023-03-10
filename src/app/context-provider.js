"use client";

import { createContext } from "react";

export const FilterContext = createContext({
  activeValue: "trades",
});

export default function ContextProvider({ children }) {
  return (
    <FilterContext.Provider value={{ activeValue: "trades" }}>
      {children}
    </FilterContext.Provider>
  );
}
