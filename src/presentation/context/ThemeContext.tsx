import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/globalStyles";
import { useColorScheme } from "react-native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    
    setTheme:(theme:ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:PropsWithChildren) => {
    const [ currentTheme, setCurrentTheme ] = useState<ThemeColor>('light');
    const schema = useColorScheme();
    useEffect(() => {
        setCurrentTheme(schema as ThemeColor);
    },[schema])
    const setTheme = (theme:ThemeColor) => {
        setCurrentTheme(theme);
    }

    return (
        <ThemeContext.Provider
            value={{
                currentTheme:currentTheme,
                colors: (currentTheme === 'light') ? lightColors : darkColors,
                setTheme:setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}