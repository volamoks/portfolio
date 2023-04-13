import { CSSProperties, useCallback } from 'react';

import { navList } from '../../constants';
import { MdClose } from 'react-icons/md';

import { useGoToPageByRef } from '@/hooks/useGoToPageByRef';

interface ISideBar {
    isSidebarOpen: boolean;
}
export const SideBar = ({ isSidebarOpen }: ISideBar) => {
    const { ref, handleClick } = useGoToPageByRef();
    if (ref === null) return <div></div>;

    const handleGo = useCallback(
        (ref: any) => {
            handleClick(ref);
        },
        [handleClick],
    );

    const dataArr = navList(ref);

    const sidebarClasses = !isSidebarOpen
        ? ' hidden'
        : ' grid fixed top-0 bg-gray-100/[97%] dark:bg-gray-500/[97%]  h-screen w-screen items-center z-10';

    const sideBar = (
        <ul
            className={`sticky top-0 grid gap-4 w-64 text-4xl uppercase items-center font-bold mx-auto`}
        >
            {dataArr?.map((link, i) => (
                <li
                    // onClick={() => handleGo(link?.ref)}
                    key={i}
                    className="animate_transition_slide text-gray-500 dark:text-gray-200 text-center --transition-duration': `${1 + i * 0.2}s` 
                            group cursor-pointer "
                    style={{ '--transition-duration': `${1 + i * 0.2}s` } as CSSProperties}
                >
                    {link.name}
                    <span className="invisible group-hover:visible group-hover:text-red-500">
                        _
                    </span>
                </li>
            ))}
        </ul>
    );

    return <div className={`transition-all z-10 duration-300 ${sidebarClasses}`}>{sideBar}</div>;
};
