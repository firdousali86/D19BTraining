import React, { useContext, createContext, useState, useEffect } from "react";

const ThemeContextApi = createContext();

export function ThemeContext({ children }) {
    const customThemeArray = {
        'default': {
            bgColor: '#e8f0fe',
            textColor: '#FFFFFF',
            borderColor: '#00518e',
        },
        'red': {
            bgColor: '#f5f0f6',
            textColor: '#6667ab',
            borderColor: '#cc2936',
        },
        'orange': {
            bgColor: '#eef4ed',
            textColor: '#4169e1',
            borderColor: '#ff6b35',
        },
        'pink': {
            bgColor: '#edd9f9',
            textColor: '#fef3fe',
            borderColor: '#ff06e6',
        },
    };

    const [customTheme, setCustomTheme] = useState('default');
    const [customThemeObj, setCustomThemeObj] = useState({});

    useEffect(() => {
        setCustomThemeObj(customThemeArray[customTheme]);
        console.log('call ');
    }, [customTheme]);

    const value = {
        state: { customTheme, customThemeObj },
        actions: { setCustomTheme }
    };

    return <ThemeContextApi.Provider value={value}>{children}</ThemeContextApi.Provider>;
}

export function getThemeContext() {
    return useContext(ThemeContextApi);
}
