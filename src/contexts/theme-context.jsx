import React from "react";

export const themes = {
    light: "light",
    dark: "dark",
    debug: "debug",
};

export const ThemeContext = React.createContext({
    theme: themes.debug,
});
