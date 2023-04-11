import React from 'react';
import { Header } from '../header/header';
import { SideButtons } from '../sideButtons';
import { IDarkModeProps } from '../../types';

export const Layout: React.FC<IDarkModeProps> = ({ isDarkMode, handleDarkMode, children }) => {
    return (
        <div className={`relative ${isDarkMode ? 'dark' : ''}`}>
            <SideButtons />
            <Header
                handleDarkMode={handleDarkMode}
                isDarkMode={isDarkMode}
            />

            {children}
        </div>
    );
};
