import React, { createContext, useContext, useState } from 'react';

interface ICreateContext {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export const DarkModeContext = createContext<ICreateContext>({
    isDarkMode: false,
    handleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }: React.PropsWithChildren) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const darkMode = { isDarkMode, handleDarkMode };

    return <DarkModeContext.Provider value={darkMode}>{children}</DarkModeContext.Provider>;
};
