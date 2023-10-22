import { createContext, useContext, useReducer } from "react";
import appReducer from "./appReducer";

const AppContext = createContext();

const sysDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {
  theme:
    localStorage.getItem("theme") ||
    (sysDarkTheme ? "dark" : "light"),
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payLoad: theme });
  };

  return (
    <AppContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useAppContext, AppProvider };
