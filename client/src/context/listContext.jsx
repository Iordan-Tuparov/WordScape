import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [lists, setLists] = useState({});

  const setCurrentList = (listData) => {
    setLists(listData);
  };

  return (
    <ListContext.Provider 
        value={{
          setCurrentList 
        }}
    >
        {children}
    </ListContext.Provider>
  );
};
