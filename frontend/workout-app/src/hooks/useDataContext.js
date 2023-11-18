import { DataContext } from "../context/DataContext";
import { useContext } from "react";

// Define custom hook to use DataContext (based on useContext builtin hook)
export const useDataContext = () => {
  const context = useContext(DataContext) 

  // Check if function call is within scope of DataContextProvider
  if (!context) {
    throw Error("useDataContext must be used inside a DataContextProvider")
  }

  // Return DataContext
  return context
}