import { CSSProperties, useCallback, useContext } from 'react';
import { navList } from '@/constants/constatnts';

import { MdClose } from 'react-icons/md';
import { MyContext } from '../mainPage';

interface ISideBar {
    handleOpen: () => void;
    isSidebarOpen: boolean;
}
export const SideBar = ({ handleOpen, isSidebarOpen }: ISideBar) => {
    const myValue = useContext(MyContext);
    const { ref } = myValue ? myValue : { ref: null };
    if (!ref) return null;

    const handleClick = useCallback((ref: React.RefObject<HTMLElement>) => {
        handleOpen();
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const sidebarClasses = !isSidebarOpen
        ? ' hidden '
        : ' grid fixed top-0 bg-gray-100/[97%] dark:bg-gray-500/[97%]  h-screen w-screen items-center z-10';

    const sideBar = (
        <ul
            className={`sticky top-0 grid gap-4 w-64 text-4xl uppercase items-center font-bold mx-auto`}
        >
            {navList(ref).map((link, i) => (
                <li
                    onClick={() => handleClick(link.ref)}
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

    return (
        <div className={`transition-all z-20 duration-300 ${sidebarClasses}`}>
            {sideBar}
            <MdClose
                onClick={handleOpen}
                size={30}
                className="absolute top-6 right-8 text-bold text-gray-500 dark:text-gray-200 cursor-pointer"
            />
        </div>
    );
};
