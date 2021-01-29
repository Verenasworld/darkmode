
import { useState } from "react";
import Splash from "./Components/SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#43A9BA",
  tagLineColor: "black",
  iconColor: "#43A9BA"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "#79d3e2",
  tagLineColor: "lavender",
  iconColor: "white",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
  const [theme, setTheme] = useState("light")
  return (
      <ThemeProvider theme={themes[theme]}>
        <Splash theme={theme} setTheme={setTheme} />
      </ThemeProvider>
  );
}

export default App;