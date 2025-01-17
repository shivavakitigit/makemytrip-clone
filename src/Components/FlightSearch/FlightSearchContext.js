// FlightSearchContext.jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

export const FlightProvider = ({ children }) => {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      {children} 
    </UserContext.Provider>
  );
};