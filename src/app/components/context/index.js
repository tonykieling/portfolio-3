import { createContext, useState } from "react";

export const GlobalContext = createContext();
// const initialState = {
//   about: false,
//   portfolio: false,
//   contact: false
// };

export const GlobalProvider = props => {
  const [ currentMenu, setCurrentMenu ] = useState("");

  // useEffect(() => console.log("currentMenu= ", currentMenu), [currentMenu]);

  return (
    <GlobalContext.Provider
      value={{
        currentMenu,
        setCurrentMenu
      }}>
        {props.children}
      </GlobalContext.Provider>
  )
}
