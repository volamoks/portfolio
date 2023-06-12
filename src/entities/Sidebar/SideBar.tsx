import { CSSProperties, useCallback } from 'react';
import { useRouter } from 'next/router';

import { useNavigateById } from '@/hooks/useNavigateById';

import { navList } from '@/constants';
import { useGoToPage } from '@/hooks/useGoToPage';

interface ISideBar {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}

interface ILink {
    id: number;
    name: string;
    sectionID: string;
}
export const SideBar = ({ isSidebarOpen, setIsSidebarOpen }: ISideBar) => {
    const router = useRouter();

    const { handleGoToById } = useNavigateById();
    const { handleGoToPage } = useGoToPage();

    const handleGo = useCallback(
        (link: string) => {
            setIsSidebarOpen(false);
            if (!router.asPath.split('/')[1] || router.asPath !== '/#projects') {
                handleGoToPage('/#' + link);
            }
            handleGoToById(link);
        },

        [setIsSidebarOpen, router.asPath, handleGoToPage, handleGoToById],
    );
    const sidebarClasses = !isSidebarOpen
        ? ' hidden'
        : ' grid absolute top-0  left-0 bg-gray-100/[97%] dark:bg-gray-500/[97%]  h-screen w-screen items-center z-10';

    const sideBarList = (arr: ILink[]) =>
        arr.map((link, i) => (
            <li
                onClick={() => handleGo(link?.sectionID)}
                key={i}
                className="animate_transition_slide text-gray-500 dark:text-gray-200 text-center --transition-duration': `${1 + i * 0.2}s` 
                            group cursor-pointer "
                style={{ '--transition-duration': `${1 + i * 0.2}s` } as CSSProperties}
            >
                {link.name}
                <span className="invisible group-hover:visible group-hover:text-red-500">_</span>
            </li>
        ));

    return (
        <div className={`transition-all z-10 duration-300 ${sidebarClasses}`}>
            <ul
                className={`sticky top-0 grid gap-4 w-64 text-4xl uppercase items-center font-bold mx-auto`}
            >
                {sideBarList(navList)}
            </ul>
        </div>
    );
};
