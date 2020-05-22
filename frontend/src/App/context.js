import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext([]);

export default ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getDados = async () => {
      const { data } = await axios.get("http://localhost:3001/pessoas");

      setUsers(data);
    };

    getDados();
  }, []);

  return <Context.Provider value={{ users }}>{children}</Context.Provider>;
};
