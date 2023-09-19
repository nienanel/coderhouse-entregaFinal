import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarlMode, setIsDarkMode] = useState(false)

    return (
        <ThemeContext.Provider value={{ isDarlMode }}>
            {children}
        </ThemeContext.Provider>
    )
}