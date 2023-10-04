import { createContext, useState } from "react";

export const GlobalContext = createContext();
// const initialState = {
//   about: false,
//   portfolio: false,
//   contact: false
// };

export const GlobalProvider = props => {
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
        {props.children}
      </GlobalContext.Provider>
  )
}
