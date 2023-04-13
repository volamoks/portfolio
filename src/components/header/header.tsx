import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { SideBar } from '../sidebar';

import { useDarkMode } from '../darkModeProvider';

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { handleDarkMode, isDarkMode } = useDarkMode();

    console.log(isDarkMode);
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
            className="fixed left-6 top-6  z-20"
        >
            {!isDarkMode ? (
                <MdDarkMode
                    size={40}
                    className=" text-gray-400"
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
        <button
            onClick={handleOpen}
            className="fixed top-6 right-6 xl:left-[calc(100vw-64px)] cursor-pointer text-gray-400 dark:text-gray-300 dark:hover:text-red-500 hover:text-red-500 z-20"
        >
            {!isSidebarOpen ? <GiHamburgerMenu size={30} /> : <MdClose size={34} />}
        </button>
    );

    return (
        <>
            <div className=" relative top-0  h-0 xl:h-0 flex justify-between bg-transparent z-10 ">
                {isSidebarOpen && <SideBar isSidebarOpen={isSidebarOpen} />}
                {darkModeBtn}
                {hamburger}
                {/* {!isSidebarOpen && hamburger} */}
            </div>
        </>
    );
};
