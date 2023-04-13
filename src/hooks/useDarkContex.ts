import { useContext, useState } from 'react';
import { DarkModeContext } from '../pages';

export const useContextDark = () => {
    const myValue = useContext(DarkModeContext);

    const { isDarkMode, handleDarkMode } = myValue
        ? myValue
        : { isDarkMode: null, handleDarkMode: () => {} };

    return { isDarkMode, handleDarkMode };
};
