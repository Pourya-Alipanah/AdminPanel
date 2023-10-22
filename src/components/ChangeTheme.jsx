import { useColorMode } from "@chakra-ui/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDarkmode = colorMode === "dark" ? true : false;

  const changeThemeHandler = () => {
    toggleColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <DarkModeSwitch
      checked={isDarkmode}
      onChange={changeThemeHandler}
      size={35}
      sunColor="#393E46"
      moonColor="#F7D716"
    />
  );
};

export default ChangeTheme;
