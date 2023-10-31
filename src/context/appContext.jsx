import { createContext, useContext, useReducer } from "react";
import appReducer from "./appReducer";

const AppContext = createContext();

const initialState = {
  sideBarSize: "small",
  showSideBar: false,
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleSideBar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const setSideBarSize = () => {
    dispatch({ type: "SET_SIDEBAR_SIZE" });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleSideBar, setSideBarSize }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useAppContext, AppProvider };
