import React, { useContext, useCallback } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { MyContext } from '../mainPage';

export const SideButtons = () => {
    const myValue = useContext(MyContext);
    const { ref } = myValue ? myValue : { ref: null };
    if (!ref) return null;

    const handleClick = useCallback((ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return (
        <div className="fixed right-0 translate-y-96 z-10">
            <div className=" w-64 sticky bottom-0 flex flex-col items-end gap-2">
                <button
                    onClick={() => handleClick(ref.projectsRef)}
                    className=" bg-red-500 flex items-center justify-center left-0 top-1/2 w-24 h-24 hover:w-full  group transition-all duration-700"
                >
                    <GoProject
                        size={40}
                        color="white"
                    />
                    <p className="hidden group-hover:flex text-white ml-2 font-bold text-3xl uppercase ">
                        Projects
                    </p>
                </button>
                <button
                    onClick={() => handleClick(ref.contactRef)}
                    className="flex items-center justify-center left-0 top-1/2 w-24 h-24 hover:w-full bg-white group transition-all duration-700"
                >
                    <AiOutlineMessage
                        size={40}
                        color="red"
                    />
                    <p className="hidden group-hover:flex text-red-500 ml-2 font-bold text-3xl uppercase ">
                        Contacts
                    </p>
                </button>
            </div>
        </div>
    );
};
