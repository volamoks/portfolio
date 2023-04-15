import { useGoToPageByRef } from '@/hooks/useGoToPageByRef';
import React, { useContext, useCallback } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';
import { MyContext } from '../mainPage';

export const SideButtons = () => {
    const { ref, handleClick } = useGoToPageByRef();

    return (
        <div className="fixed right-0 translate-y-[65vh] z-10">
            <div className=" w-64 sticky bottom-0 flex flex-col items-end gap-2">
                <button
                    onClick={() => handleClick(ref?.myProjectsRef)}
                    className=" bg-red-500 flex items-center justify-center left-0 top-1/2 w-20 h-20 hover:w-full  group transition-all duration-700 z-10"
                >
                    <GoProject
                        size={30}
                        color="white"
                    />
                    <p className="hidden group-hover:flex text-white ml-2 font-bold text-2xl uppercase z-10 ">
                        Projects
                    </p>
                </button>
                <button
                    onClick={() => handleClick(ref?.contactsRef)}
                    className="flex items-center justify-center left-0 top-1/2 w-20 h-20 hover:w-full bg-white group transition-all duration-700"
                >
                    <AiOutlineMessage
                        size={30}
                        color="red"
                    />
                    <p className="hidden group-hover:flex text-red-500 ml-2 font-bold text-2xl uppercase ">
                        Contacts
                    </p>
                </button>
            </div>
        </div>
    );
};
