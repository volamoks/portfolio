import { CSSProperties, useCallback } from 'react';

import { navList } from '../../constants';
import { useNavigateById } from '@/hooks/useNavigateById';
import { useRouter } from 'next/router';

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

    const handleGo = useCallback(
        (link: string) => {
            if (router.pathname !== '/') router.push('/');
            setIsSidebarOpen(false);
            const handleGo = setTimeout(() => {
                handleGoToById(link);
            }, 0);
            return () => clearTimeout(handleGo);
        },

        [setIsSidebarOpen, handleGoToById, router],
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

    const sideBar = (
        <ul
            className={`sticky top-0 grid gap-4 w-64 text-4xl uppercase items-center font-bold mx-auto`}
        >
            {sideBarList(navList)}
        </ul>
    );

    return <div className={`transition-all z-10 duration-300 ${sidebarClasses}`}>{sideBar}</div>;
};
