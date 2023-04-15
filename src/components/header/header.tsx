import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { SideBar } from '../sidebar';

import { useDarkMode } from '../darkModeProvider';
import { SideButtons } from '../sideButtons';

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { handleDarkMode, isDarkMode } = useDarkMode();

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
            className="absolute left-6 top-6 z-20 text-gray-400"
        >
            {!isDarkMode ? <MdDarkMode size={40} /> : <MdSunny size={40} />}
        </button>
    );

    const hamburger = (
        <button
            onClick={handleOpen}
            className="absolute top-6 right-6 xl:left-[calc(100vw-64px)] cursor-pointer text-gray-400 dark:text-gray-300 xl:dark:hover:text-red-500 xl:hover:text-red-500 z-20"
        >
            {!isSidebarOpen ? <GiHamburgerMenu size={30} /> : <MdClose size={34} />}
        </button>
    );

    return (
        <>
            <div className=" absolute top-0 w-full h-20 flex justify-between-10 ">
                {isSidebarOpen && (
                    <SideBar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                )}
                {darkModeBtn}
                {hamburger}
                <SideButtons />
                {/* {!isSidebarOpen && hamburger} */}
            </div>
        </>
    );
};
