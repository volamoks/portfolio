import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SideBar } from '../sidebar';

interface IHeader {
    handleDarkMode: () => void;
    isDarkMode: boolean;
}

export const Header = ({ handleDarkMode, isDarkMode }: IHeader) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? 'hidden' : 'visible';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isSidebarOpen]);

    const handleOpen = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const darkModeBtn = (
        <button
            onClick={handleDarkMode}
            className="fixed left-6 top-6  "
        >
            {!isDarkMode ? (
                <MdDarkMode
                    size={40}
                    className=" text-gray-500"
                />
            ) : (
                <MdSunny
                    size={40}
                    className="text-gray-300"
                />
            )}
        </button>
    );

    const hamburger = (
        <GiHamburgerMenu
            size={30}
            onClick={handleOpen}
            className="fixed top-6 right-6 cursor-pointer text-gray-500 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-500"
        />
    );

    return (
        <>
            <div className=" relative top-0  h-0 xl:h-0 flex justify-between bg-transparent z-10 ">
                {isSidebarOpen && (
                    <SideBar
                        handleOpen={handleOpen}
                        isSidebarOpen={isSidebarOpen}
                    />
                )}
                {darkModeBtn}
                {hamburger}
            </div>
        </>
    );
};
