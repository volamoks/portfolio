import { useGoToPage } from '@/hooks/useGoToPage';
import { useNavigateById } from '@/hooks/useNavigateById';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoProject } from 'react-icons/go';

export const SideButtons = () => {
    const { handleGoToById } = useNavigateById();
    const router = useRouter();

    const handleGoTo = (url: string) => {
        // if (router.asPath !== '/#projects') {
        //     console.log(router.asPath);
        //     router.push('/#' + url);
        // }
        handleGoToById(url);
    };

    const redButton = (
        <button
            onClick={() => handleGoTo('projects')}
            className=" bg-red-500 flex items-center justify-center left-0 top-1/2 w-20 h-20 hover:w-full  group transition-all duration-700 z-10"
        >
            <GoProject
                size={30}
                color="white"
            />
            <span className="hidden group-hover:flex text-white ml-2 font-bold text-2xl uppercase z-10 ">
                Projects
            </span>
        </button>
    );

    const whiteButton = (
        <button
            onClick={() => handleGoTo('contacts')}
            className="flex items-center justify-center left-0 top-1/2 w-20 h-20 hover:w-full bg-white group transition-all duration-700"
        >
            <AiOutlineMessage
                size={30}
                color="red"
            />
            <span className="hidden group-hover:flex text-red-500 ml-2 font-bold text-2xl uppercase ">
                Contacts
            </span>
        </button>
    );

    return (
        <div className="fixed right-0 translate-y-[65vh] z-10">
            <div className=" w-64 sticky bottom-0 flex flex-col items-end gap-2">
                {redButton} {whiteButton}
            </div>
        </div>
    );
};
