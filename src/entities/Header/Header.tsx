import React, { useEffect, useState } from 'react';

import { useNavigateById } from '@/hooks/useNavigateById';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { SideBar } from '../Sidebar/SideBar';
import { DarkModeBtn, SideButtons } from '@/components/UI';

export const Header = () => {
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

    const hamburger = (
        <button
            onClick={handleOpen}
            className="absolute top-6 right-6 xl:left-[calc(100vw-64px)] cursor-pointer  xl:dark:hover:text-red-500 xl:hover:text-red-500 z-20"
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
                <DarkModeBtn />
                {hamburger}
                <SideButtons />
            </div>
        </>
    );
};
