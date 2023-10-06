import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [ currentMenu, setCurrentMenu ] = useState("");
  const [ loadImages, setLoadImages ] = useState(false);
  const [ showWaves, setShowWaves ] = useState(true);


  return (
    <GlobalContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,

        loadImages,
        setLoadImages,

        showWaves,
        setShowWaves
      }}>
        { children }
      </GlobalContext.Provider>
  )
}
