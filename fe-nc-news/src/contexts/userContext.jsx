import { createContext, useState, useEffect } from "react";
import { apiClient } from "../utils/APIclient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    apiClient
      .get("/users")
      .then((response) => {
        setUsers(response.data.users);
        setCurrentUser(response.data.users[0]);
      })
      .catch((err) => {
        console.log("Error getting users: ", err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
