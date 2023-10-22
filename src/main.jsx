import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@core/chakraCustomTheme.js";
import { AppProvider } from "./context/appContext.jsx";


import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </AppProvider>
);
