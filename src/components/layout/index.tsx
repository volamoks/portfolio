import React from 'react';
import { Header } from '../header/header';
import { SideButtons } from '../sideButtons';

import { useDarkMode } from '../darkModeProvider';

interface ILayoutProps {
    nth: number;
    children: React.ReactElement;
}

export const Layout: React.FC<ILayoutProps> = ({ nth, children }) => {
    const { isDarkMode } = useDarkMode();
    console.log(isDarkMode);

    const modeClasses =
        nth % 2 !== 0
            ? 'bg-gray-600 dark:bg-gray-800 text-gray-200 dark:text-gray-200 '
            : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-200 ';

    return (
        <div className={`relative ${isDarkMode ? 'dark' : ''}`}>
            <SideButtons />
            <Header />
            <div className={`transition-all duration-1000 ${modeClasses}`}>{children}</div>
        </div>
    );
};
